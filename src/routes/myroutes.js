import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'It Works!'
  });
});

export default router;
