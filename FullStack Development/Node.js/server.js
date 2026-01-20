import http from 'http';

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end('This  is from the server', 'utf8', () => console.log('response end'));
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));