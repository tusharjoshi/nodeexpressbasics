import http from 'http';

process.on('exit', () => {
  console.log('Server terminated.');
});

const server = http.createServer((req, res) => {
  console.log('Received request');
  console.log(req.method, req.url);

  if (req.method === 'POST') {
    let body = '';
    req.on('end', () => {
      console.log(body);
      const name = body.split('=')[1];
      res.end(`Welcome, ${name} received your POST request also.`);
    });
    req.on('data', (chunk) => {
      body += chunk;
    });

  } else {
    res.setHeader('Content-Type', 'text/html');

    res.end(`
      <html>
      <head><title>My Server</title></head>
      <body>
        <form method="POST">
          <label for="name">Name:</label>
          <input type="text" name="name">
          <button type="submit">Submit</button>
        </form>
      </body>
      </html>
    `);
  }
});

const port = 3000;
server.listen(port);
console.log('Starting server on port:', port);
