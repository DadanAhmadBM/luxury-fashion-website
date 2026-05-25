import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

console.log('Generating Vercel Build Output API v3 structure...');

// 1. Bundle SSR server into a single self-contained file
await build({
  entryPoints: ['dist/server/server.js'],
  bundle: true,
  outfile: '.vercel/output/functions/index.func/server-bundled.js',
  platform: 'node',
  target: 'node20',
  format: 'esm',
  minify: false,
  external: ['node:*'],
  banner: {
    js: `
import { createRequire } from 'node:module';
import { fileURLToPath as __fileURLToPath } from 'node:url';
import { dirname as __dirname_fn } from 'node:path';
const require = createRequire(import.meta.url);
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirname_fn(__filename);
`.trim()
  }
});

console.log('  ✓ Bundled SSR server');

// 2. Create the serverless function entry point (handler)
const handlerCode = `
import server from './server-bundled.js';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const fullUrl = new URL(req.url, protocol + '://' + host);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      } else if (value) {
        headers.set(key, value);
      }
    }

    const init = { method: req.method, headers };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        init.body = Buffer.concat(chunks);
      }
    }

    const webRequest = new Request(fullUrl.href, init);
    const webResponse = await server.fetch(webRequest);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        if (chunk) res.write(chunk);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (err) {
    console.error('Vercel Handler Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error: ' + err.message);
  }
}
`;

fs.writeFileSync('.vercel/output/functions/index.func/index.js', handlerCode);
console.log('  ✓ Created function handler');

// 3. Create .vc-config.json for the function
fs.writeFileSync('.vercel/output/functions/index.func/.vc-config.json', JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
  launcherType: 'Nodejs'
}, null, 2));
console.log('  ✓ Created .vc-config.json');

// 4. Copy static assets from dist/client to .vercel/output/static
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const staticSrc = 'dist/client';
const staticDest = '.vercel/output/static';
if (fs.existsSync(staticSrc)) {
  copyDirSync(staticSrc, staticDest);
  console.log('  ✓ Copied static assets');
}

// 5. Create the top-level config.json with routing rules
// Static assets are served first via "handle": "filesystem"
// Everything else falls through to the SSR function
const config = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index" }
  ]
};

fs.writeFileSync('.vercel/output/config.json', JSON.stringify(config, null, 2));
console.log('  ✓ Created config.json');

console.log('\\nSuccessfully generated .vercel/output!');
console.log('  Static files: .vercel/output/static/');
console.log('  Function: .vercel/output/functions/index.func/');
