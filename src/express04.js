import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/user', (req, res, next) => {
  res.send(`<h1>Welcome ${req.body.name}!`);
});

app.get('/', (req, res, next) => {
  console.log('Received request');
  console.log(req.method, req.url);
  res.send(`
  <html>
  <head><title>My Server</title></head>
  <body>
    <form action="/user" method="POST">
      <label for="name">Name:</label>
      <input type="text" name="name">
      <button type="submit">Submit</button>
    </form>
  </body>
  </html>
`)
});

const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);
