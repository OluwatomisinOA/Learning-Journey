import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
  console.log('hi');
  serveStatic(__dirname);
  console.log(__dirname)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`)
});