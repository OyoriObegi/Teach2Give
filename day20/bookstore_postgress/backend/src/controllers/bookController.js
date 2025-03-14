"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.patchBook = exports.updateBook = exports.addBook = exports.getBookById = exports.getBooks = void 0;
const db_config_1 = __importDefault(require("../db/db.config"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
// ✅ Get all books
exports.getBooks = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sort } = req.query;
    let query = "SELECT * FROM books";
    let orderBy = "";
    // Sorting logic
    if (sort) {
        const [field, order] = sort.split("-");
        const validFields = ["year", "pages", "title", "author", "genre", "price"];
        const validOrder = ["asc", "desc"];
        if (validFields.includes(field) && validOrder.includes(order)) {
            orderBy = ` ORDER BY ${field} ${order.toUpperCase()}`;
        }
    }
    const result = yield db_config_1.default.query(query + orderBy);
    res.status(200).json({ books: result.rows });
}));
// ✅ Get a book by ID
exports.getBookById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield db_config_1.default.query("SELECT * FROM books WHERE id = $1", [id]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "Book not found" });
    res.status(200).json(result.rows[0]);
}));
// ✅ Add a new book
exports.addBook = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;
    const bookCheck = yield db_config_1.default.query("SELECT id FROM books WHERE title = $1 AND author = $2", [title, author]);
    if (bookCheck.rows.length > 0)
        return res.status(400).json({ message: "Book already exists" });
    const bookResult = yield db_config_1.default.query(`INSERT INTO books (title, author, genre, year, pages, price, publisher, description, image) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [title, author, genre, year, pages, price, publisher, description, image]);
    res.status(201).json({ message: "Book successfully added", book: bookResult.rows[0] });
}));
// ✅ Update an entire book (PUT)
exports.updateBook = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;
    const bookCheck = yield db_config_1.default.query("SELECT id FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0)
        return res.status(404).json({ message: "Book does not exist" });
    const bookResult = yield db_config_1.default.query(`UPDATE books SET title=$1, author=$2, genre=$3, year=$4, pages=$5, price=$6, 
         publisher=$7, description=$8, image=$9 WHERE id=$10 RETURNING *`, [title, author, genre, year, pages, price, publisher, description, image, id]);
    res.status(200).json({ message: "Book successfully updated", book: bookResult.rows[0] });
}));
// ✅ Update specific fields of a book (PATCH)
exports.patchBook = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;
    const bookCheck = yield db_config_1.default.query("SELECT * FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0)
        return res.status(404).json({ message: "Book not found" });
    // Dynamically build update query
    let updateFields = [];
    let values = [];
    let index = 1;
    if (title) {
        updateFields.push(`title = $${index++}`);
        values.push(title);
    }
    if (author) {
        updateFields.push(`author = $${index++}`);
        values.push(author);
    }
    if (genre) {
        updateFields.push(`genre = $${index++}`);
        values.push(genre);
    }
    if (year) {
        updateFields.push(`year = $${index++}`);
        values.push(year);
    }
    if (pages) {
        updateFields.push(`pages = $${index++}`);
        values.push(pages);
    }
    if (price) {
        updateFields.push(`price = $${index++}`);
        values.push(price);
    }
    if (publisher) {
        updateFields.push(`publisher = $${index++}`);
        values.push(publisher);
    }
    if (description) {
        updateFields.push(`description = $${index++}`);
        values.push(description);
    }
    if (image) {
        updateFields.push(`image = $${index++}`);
        values.push(image);
    }
    if (updateFields.length === 0) {
        return res.status(400).json({ message: "No fields provided for update" });
    }
    values.push(id); // Add book ID to the values array
    const query = `UPDATE books SET ${updateFields.join(", ")} WHERE id = $${index} RETURNING *`;
    const updatedBook = yield db_config_1.default.query(query, values);
    res.status(200).json({ message: "Book successfully updated", book: updatedBook.rows[0] });
}));
// ✅ Delete a book
exports.deleteBook = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bookCheck = yield db_config_1.default.query("SELECT * FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0)
        return res.status(404).json({ message: "Book not found" });
    yield db_config_1.default.query("DELETE FROM books WHERE id = $1", [id]);
    res.json({ message: "Book deleted successfully" });
}));
