import express from 'express';
import HttpError from '../models/http-error.js';

const router = express.Router();

const postList = [
  {
    id: 'p1',
    title: 'First Post',
    content: 'Sample post content'
  },
  {
    id: 'p2',
    title: 'Second Post',
    content: 'Another sample post content'
  }
];

router.get('/:id', (req, res, next) => {
  console.log('Received request');
  const id = req.params.id;
  const post = postList.find(postItem => id === postItem.id);
  if(!post) {
    const error = new HttpError('Post not found error (model)', 404);
    next(error);
    return;
  }

  res.json({ post });

});

export default router;
