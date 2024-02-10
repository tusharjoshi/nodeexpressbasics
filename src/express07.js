import express from 'express';
import postRoutes from './routes/post-routes.js';

const app = express();

app.use('/api/posts', postRoutes);

const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);
