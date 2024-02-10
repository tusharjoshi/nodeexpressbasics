import express from 'express';
import myRoutes from './routes/myroutes.js';

const app = express();

app.use('/api/posts', myRoutes);

const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);
