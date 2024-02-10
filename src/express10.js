import express from 'express';
import postRoutes from './routes/post-routes-with-controllers.js';

const app = express();

app.use('/api/posts', postRoutes);

// special error handler middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({
      message: error.message || 'Server error'
    });
});

const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);
