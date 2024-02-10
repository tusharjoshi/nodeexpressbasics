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
  if(post) {
    res.json({
      message: 'It Works!',
      post
    });
  } else {
    res
      .status(404)
      .json({ message: 'Post not found.'});
  }

});

export default router;
