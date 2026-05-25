import { build } from 'esbuild';
import fs from 'fs';

console.log('Bundling SSR server to bypass Vercel NFT dynamic import issues...');

// Bundle the server into a single file without dynamic imports
await build({
  entryPoints: ['dist/server/server.js'],
  bundle: true,
  outfile: 'dist/server-bundled.js',
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

console.log('Successfully bundled server to dist/server-bundled.js');
