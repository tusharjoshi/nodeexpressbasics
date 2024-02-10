import express from 'express';
import postsController from '../controllers/posts-controller.js';

const router = express.Router();

router.get('/:id', postsController.getPostById);

export default router;
