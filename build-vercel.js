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
  runtime: "edge",
  entrypoint: "index.js"
}));

// 5. Copy dist/server into the function directory so it's self-contained
copyDir('dist/server', `${outDir}/functions/index.func/dist/server`);

// 6. Create edge function entrypoint
fs.writeFileSync(`${outDir}/functions/index.func/index.js`, `
import server from "./dist/server/server.js";
export default async function handler(request) {
  return server.fetch(request);
}
`);

console.log('Successfully generated .vercel/output!');
