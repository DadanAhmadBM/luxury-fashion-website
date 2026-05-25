import server from '../dist/server-bundled.js';

export default async function handler(req, res) {
  try {
    // 1. Create a full URL from Vercel's req.url
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const fullUrl = new URL(req.url, `${protocol}://${host}`);

    // 2. Convert Node.js req to Web Request
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      } else if (value) {
        headers.set(key, value);
      }
    }

    const init = {
      method: req.method,
      headers
    };

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

    // 3. Call TanStack server
    const webResponse = await server.fetch(webRequest);

    // 4. Convert Web Response back to Node.js res
    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (err) {
    console.error('Vercel API Handler Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error: ' + err.message);
  }
}
