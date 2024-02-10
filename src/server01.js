import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Received request');
  console.log({req});
  res.end('Request Accepted!');
});

server.listen(3000);
