import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; // Import user routes
import path from 'path';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// API routes for users, posts, comments
app.use('/api', userRoutes);

// Default route to handle the root of the app (serving index.html)
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
