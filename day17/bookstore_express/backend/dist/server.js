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
const PORT = process.env.PORT;
// Middleware
app.use((0, cors_1.default)()); // Allow cross-origin requests
app.use(express_1.default.json()); // Allow JSON body parsing
// Serve static frontend files
const frontendPath = path_1.default.join(__dirname, "../../frontend");
app.use(express_1.default.static(frontendPath));
// Load book data
const dataFilePath = path_1.default.join(__dirname, "/../dist/data.json");
const books = JSON.parse(fs_1.default.readFileSync(dataFilePath, "utf-8"));
// Routes
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(frontendPath, "index.html"));
});
app.get("/books", (req, res) => {
    res.json(books.books);
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map