import fs from 'fs';
import path from 'path';

console.log('Generating .vercel/output structure...');

const outDir = '.vercel/output';
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

// 1. Create directories
fs.mkdirSync(`${outDir}/static`, { recursive: true });
fs.mkdirSync(`${outDir}/functions/index.func`, { recursive: true });

// 2. Create config.json
fs.writeFileSync(`${outDir}/config.json`, JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/' }
  ]
}));

// 3. Copy dist/client to .vercel/output/static
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
copyDir('dist/client', `${outDir}/static`);

// 4. Create function index.func config
fs.writeFileSync(`${outDir}/functions/index.func/.vc-config.json`, JSON.stringify({
  runtime: "nodejs20.x",
  handler: "index.js",
  launcherType: "Nodejs"
}));

// 5. Copy dist/server into the function directory so it's self-contained
copyDir('dist/server', `${outDir}/functions/index.func/dist/server`);

// 6. Create Node.js function entrypoint
fs.writeFileSync(`${outDir}/functions/index.func/index.js`, `
import server from "./dist/server/server.js";

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const url = new URL(req.url, \`\${protocol}://\${req.headers.host}\`);
  
  const headers = new Headers();
  for (const key in req.headers) {
    if (req.headers[key]) headers.append(key, req.headers[key]);
  }
  
  const requestInit = { method: req.method, headers };
  
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    requestInit.body = req;
    requestInit.duplex = 'half';
  }
  
  const request = new Request(url.href, requestInit);
  const response = await server.fetch(request);
  
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}
`);

console.log('Successfully generated .vercel/output!');
