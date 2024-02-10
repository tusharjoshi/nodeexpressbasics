import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Received request');
  console.log(req.method, req.url);

  // res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Type', 'text/plain');

  res.end('<h1>Request Accepted!</h1>');
});

server.listen(3000);
