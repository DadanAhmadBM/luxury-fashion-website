import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  // Vercel sometimes passes the host in req.headers.host
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL(req.url, `http://${host}`);
  
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
    // Pipe standard web stream to node response
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}
