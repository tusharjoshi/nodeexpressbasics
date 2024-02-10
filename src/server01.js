import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Received request');
  console.log(req.url, req.method);
  // console.log({req});
  res.end('Request Accepted!');
});

console.log('Server started on port 3000');
server.listen(3000);
