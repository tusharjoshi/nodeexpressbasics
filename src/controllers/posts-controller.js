import HttpError from '../models/http-error.js';

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

export const getPostById = (req, res, next) => {
  console.log('Received request');
  const id = req.params.id;
  const post = postList.find(postItem => id === postItem.id);
  if(!post) {
    const error = new HttpError('Post not found error (controller)', 404);
    next(error);
    return;
  }

  res
      .status(404)
      .json({  post });

};

export default {
  getPostById
};
