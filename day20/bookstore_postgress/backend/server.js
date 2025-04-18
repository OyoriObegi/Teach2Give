"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
//configuring the dotenv is the top most level
dotenv_1.default.config();
//instance of express is the second top most level
const app = (0, express_1.default)();
//load the variables
const port = 3000;
console.log(port);
//enable cors
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000/api/books"],
    methods: "GET, PUT, DELETE, POST",
    credentials: true,
}));
//Middleware to parse json
app.use(express_1.default.json());
//get the current directory
const _dirname = path_1.default.resolve();
// Read the file synchronously (Handle errors properly)
const booksData = (0, fs_1.readFileSync)(path_1.default.join(_dirname, "src", "db", "data.json"), "utf-8");
// Parse JSON data and extract the books array
const books = JSON.parse(booksData).books;
// API endpoint to get books with optional filtering and sorting
app.get("/api/books", (req, res) => {
    try {
        // Extract query parameters for filtering and sorting
        const { search, genre, year, sort } = req.query;
        // Create a copy of the books array to avoid modifying the original
        let filteredBooks = [...books];
        // Apply filters
        if (genre) {
            // Filter books by genre (case-insensitive)
            filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase() === genre.toLowerCase());
        }
        if (search) {
            // Filter books by search term in title or author (case-insensitive)
            const searchTerm = search.toLowerCase().trim();
            filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm));
        }
        // Apply sorting
        if (sort) {
            // Parse sort parameter (format: field-order, e.g., "year-asc")
            const [sortField, sortOrder] = sort.split("-");
            if (sortField === "year") {
                // Sort by publication year
                filteredBooks.sort((a, b) => {
                    return sortOrder === "asc" ? a.year - b.year : b.year - a.year;
                });
            }
            else if (sortField === "pages") {
                // Sort by number of pages
                filteredBooks.sort((a, b) => {
                    return sortOrder === "asc" ? a.pages - b.pages : b.pages - a.pages;
                });
            }
        }
        // Return the filtered and sorted books as JSON
        res.json({
            books: filteredBooks,
        });
    }
    catch (error) {
        // Handle any errors that occur during processing
        console.error("Error processing book request:", error);
        res.status(500).json({ error: "Failed to retrieve books" });
    }
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
