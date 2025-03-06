import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Allow JSON body parsing

// Serve static frontend files
const frontendPath = path.join(__dirname, "../../frontend");
app.use(express.static(frontendPath));

// Load book data
const dataFilePath = path.join(__dirname, "/../dist/data.json");
const books = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

app.get("/books", (req, res) => {
    res.json(books.books);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
