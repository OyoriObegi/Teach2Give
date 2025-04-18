import { Request, Response } from "express";
import pool from "../db/db.config";
import asyncHandler from "../middlewares/asyncHandler";

// ✅ Get all books
export const getBooks = asyncHandler(async (req: Request, res: Response) => {
    const { sort } = req.query;

    let query = "SELECT * FROM books";
    let orderBy = "";

    // Sorting logic
    if (sort) {
        const [field, order] = (sort as string).split("-");
        const validFields = ["year", "pages", "title", "author", "genre", "price"];
        const validOrder = ["asc", "desc"];

        if (validFields.includes(field) && validOrder.includes(order)) {
            orderBy = ` ORDER BY ${field} ${order.toUpperCase()}`;
        }
    }

    const result = await pool.query(query + orderBy);
    res.status(200).json({ books: result.rows });
});

// ✅ Get a book by ID
export const getBookById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

    if (result.rows.length === 0) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(result.rows[0]);
});

// ✅ Add a new book
export const addBook = asyncHandler(async (req: Request, res: Response) => {
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;

    const bookCheck = await pool.query("SELECT id FROM books WHERE title = $1 AND author = $2", [title, author]);
    if (bookCheck.rows.length > 0) return res.status(400).json({ message: "Book already exists" });

    const bookResult = await pool.query(
        `INSERT INTO books (title, author, genre, year, pages, price, publisher, description, image) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [title, author, genre, year, pages, price, publisher, description, image]
    );

    res.status(201).json({ message: "Book successfully added", book: bookResult.rows[0] });
});

// ✅ Update an entire book (PUT)
export const updateBook = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;

    const bookCheck = await pool.query("SELECT id FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0) return res.status(404).json({ message: "Book does not exist" });

    const bookResult = await pool.query(
        `UPDATE books SET title=$1, author=$2, genre=$3, year=$4, pages=$5, price=$6, 
         publisher=$7, description=$8, image=$9 WHERE id=$10 RETURNING *`,
        [title, author, genre, year, pages, price, publisher, description, image, id]
    );

    res.status(200).json({ message: "Book successfully updated", book: bookResult.rows[0] });
});

// ✅ Update specific fields of a book (PATCH)
export const patchBook = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, genre, year, pages, price, publisher, description, image } = req.body;

    const bookCheck = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0) return res.status(404).json({ message: "Book not found" });

    // Dynamically build update query
    let updateFields: string[] = [];
    let values: any[] = [];
    let index = 1;

    if (title) { updateFields.push(`title = $${index++}`); values.push(title); }
    if (author) { updateFields.push(`author = $${index++}`); values.push(author); }
    if (genre) { updateFields.push(`genre = $${index++}`); values.push(genre); }
    if (year) { updateFields.push(`year = $${index++}`); values.push(year); }
    if (pages) { updateFields.push(`pages = $${index++}`); values.push(pages); }
    if (price) { updateFields.push(`price = $${index++}`); values.push(price); }
    if (publisher) { updateFields.push(`publisher = $${index++}`); values.push(publisher); }
    if (description) { updateFields.push(`description = $${index++}`); values.push(description); }
    if (image) { updateFields.push(`image = $${index++}`); values.push(image); }

    if (updateFields.length === 0) {
        return res.status(400).json({ message: "No fields provided for update" });
    }

    values.push(id); // Add book ID to the values array
    const query = `UPDATE books SET ${updateFields.join(", ")} WHERE id = $${index} RETURNING *`;

    const updatedBook = await pool.query(query, values);
    res.status(200).json({ message: "Book successfully updated", book: updatedBook.rows[0] });
});

// ✅ Delete a book
export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const bookCheck = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    if (bookCheck.rows.length === 0) return res.status(404).json({ message: "Book not found" });

    await pool.query("DELETE FROM books WHERE id = $1", [id]);
    res.json({ message: "Book deleted successfully" });
});
