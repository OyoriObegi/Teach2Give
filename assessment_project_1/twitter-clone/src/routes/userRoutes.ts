import express, { Request, Response } from 'express';
import axios from 'axios'; // We will use axios to fetch data from the API

const router = express.Router();

// Fetch all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data); // Send back the user data
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

// Fetch posts for a specific user
router.get('/posts/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    res.json(response.data); // Send back the posts for the selected user
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

// Fetch comments for a specific post
router.get('/comments/:postId', async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    res.json(response.data); // Send back the comments for the selected post
  } catch (error) {
    res.status(500).send('Error fetching comments');
  }
});

export default router;
