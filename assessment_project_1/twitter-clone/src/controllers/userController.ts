import axios from 'axios';
import { Request, Response } from 'express';

// Fetch users from JSONPlaceholder
export const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data); // Send users as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Fetch posts for a specific user
export const getPosts = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    res.json(response.data); // Send posts for the selected user
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

// Fetch comments for a specific post
export const getComments = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    res.json(response.data); // Send comments for the selected post
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};
