import express from 'express';
import { getUsers, getPosts, getComments } from '../controllers/userController'; // Import controller functions

const router = express.Router();

// Route to get all users
router.get('/users', getUsers);

// Route to get posts for a specific user
router.get('/posts/:userId', getPosts);

// Route to get comments for a specific post
router.get('/comments/:postId', getComments);

export default router;
