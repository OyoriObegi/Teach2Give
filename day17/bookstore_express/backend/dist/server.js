"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config(); // Load environment variables
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve static frontend files
const frontendPath = path_1.default.join(__dirname, "../../frontend");
app.use(express_1.default.static(frontendPath));
// Load book data
const dataFilePath = path_1.default.join(__dirname, "/../dist/data.json");
let books = JSON.parse(fs_1.default.readFileSync(dataFilePath, "utf-8")).books;
// Assign unique IDs to books if they don't have one
books.forEach((book, index) => {
    if (!book.id) {
        book.id = index + 1; // Assign an ID starting from 1
    }
});
// Routes
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(frontendPath, "index.html"));
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
    const search = req.query.search;
    if (search && typeof search === 'string') {
        const searchLower = search.toLowerCase();
        filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(searchLower) ||
            book.author.toLowerCase().includes(searchLower));
    }
    res.json(filteredBooks);
});
// Get a single book by ID
app.get("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({ message: "Book not found" });
    }
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map