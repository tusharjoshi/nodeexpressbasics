import express from 'express';

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
    const error = new Error('Post not found error');
    error.code = 404;
    next(error);
    return;
  }

  res.json({ post });

});

export default router;
