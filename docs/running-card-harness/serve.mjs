// Static server for a Next export (out/): /running-card → running-card.html. Usage: node serve.mjs <outDir> <port>
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const [ROOT, PORT = '3019'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.ico': 'image/x-icon', '.wasm': 'application/wasm' };

http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const tries = [url, `${url}.html`, path.join(url, 'index.html')];
  for (const t of tries) {
    const file = path.join(ROOT, t);
    if (!file.startsWith(path.resolve(ROOT))) break;
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
      return;
    }
  }
  res.writeHead(404); res.end('not found');
}).listen(+PORT, '127.0.0.1', () => console.log(`serving ${ROOT} on :${PORT}`));
