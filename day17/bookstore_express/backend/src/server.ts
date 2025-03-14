import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
const frontendPath = path.join(__dirname, "../../frontend");
app.use(express.static(frontendPath));

// Load book data
const dataFilePath = path.join(__dirname, "/../dist/data.json");
let books = JSON.parse(fs.readFileSync(dataFilePath, "utf-8")).books;

// Assign unique IDs to books if they don't have one
books.forEach((book: any, index: number) => {
    if (!book.id) {
        book.id = index + 1; // Assign an ID starting from 1
    }
});

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// Get all books with filters, search, and sorting
app.get("/books", (req, res) => {
    let filteredBooks = [...books];
    // Filter by genre
    const { genre, searchInput } = req.query;
    if (genre) {
        filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre);
    }

    if (searchInput) {
        filteredBooks = filteredBooks.filter(book => {
            const search = searchInput;
            return book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search);
        });
    }


    // Search by title or author
    const search = req.query.search as string;
    if (search && typeof search === 'string') {
        const searchLower = search.toLowerCase();
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchLower) ||
            book.author.toLowerCase().includes(searchLower)
        );
    }

    res.json(filteredBooks);
});

// Get a single book by ID
app.get("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b: any) => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
