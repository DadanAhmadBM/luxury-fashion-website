import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';

console.log('Generating .vercel/output structure...');

const outDir = '.vercel/output';

// Clean previous output
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

// Helper: recursive copy
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Create config.json
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/config.json`, JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/' }
  ]
}, null, 2));

// 2. Copy dist/client -> .vercel/output/static
copyDir('dist/client', `${outDir}/static`);

// 3. Create the adapter entry source (temporary file for esbuild)
// The server uses Web API fetch(Request) -> Response pattern.
// We adapt it for Vercel Node.js runtime using node:http conversion.
const adapterSrc = `
import server from './dist/server/server.js';

export default async function handler(req, res) {
  try {
    // Build Web API Request from Node.js IncomingMessage
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = protocol + '://' + host + req.url;
    
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }
    
    const init = { method: req.method, headers };
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      // Collect body from Node.js stream
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        init.body = Buffer.concat(chunks);
      }
    }
    
    const webRequest = new Request(url, init);
    const webResponse = await server.fetch(webRequest);
    
    // Write Web API Response back to Node.js ServerResponse
    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText || '';
    
    webResponse.headers.forEach((value, key) => {
      // Skip transfer-encoding since Node.js handles this
      if (key.toLowerCase() === 'transfer-encoding') return;
      res.setHeader(key, value);
    });
    
    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
        }
      } finally {
        reader.releaseLock();
      }
    }
    
    res.end();
  } catch (error) {
    console.error('Vercel handler error:', error);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>Internal Server Error</h1>');
  }
}
`;
fs.writeFileSync('_vercel_adapter_entry.js', adapterSrc);

// 4. Bundle with esbuild into a single self-contained file
const funcDir = `${outDir}/functions/index.func`;
fs.mkdirSync(funcDir, { recursive: true });

await build({
  entryPoints: ['_vercel_adapter_entry.js'],
  bundle: true,
  outfile: `${funcDir}/index.js`,
  platform: 'node',
  target: 'node20',
  format: 'esm',
  minify: false,
  // Only externalize Node.js built-in modules
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

// Clean up temp file
fs.unlinkSync('_vercel_adapter_entry.js');

// 5. Write .vc-config.json for the function
fs.writeFileSync(`${funcDir}/.vc-config.json`, JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
  launcherType: 'Nodejs',
  shouldAddHelpers: true,
  supportsResponseStreaming: true
}, null, 2));

console.log('Successfully generated .vercel/output!');
console.log('  Static files: ' + outDir + '/static/');
console.log('  Function: ' + funcDir + '/index.js');
