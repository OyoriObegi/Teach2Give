import express from 'express';
import { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

// PostgreSQL connection setup
const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'bookstore',
    password: 'yourpassword',
    port: 5432,
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all books
app.get('/books', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get a book by ID
app.get('/books/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to create a new book
app.post('/books', async (req, res) => {
    const { title, author, published_date } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO books (title, author, published_date) VALUES ($1, $2, $3) RETURNING *',
            [title, author, published_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to update a book by ID
app.put('/books/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, published_date } = req.body;
    try {
        const result = await pool.query(
            'UPDATE books SET title = $1, author = $2, published_date = $3 WHERE id = $4 RETURNING *',
            [title, author, published_date, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete a book by ID
app.delete('/books/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});