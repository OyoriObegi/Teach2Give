import express from "express";
import { getBooks, getBookById, addBook, updateBook, patchBook, deleteBook } from "../controllers/bookController";
import { authorizeRoles } from "../middlewares/roleMiddleware"; // ✅ Import middleware

const router = express.Router();

// ✅ Get all books (Everyone can view)
router.get("/", getBooks);

// ✅ Get a single book by ID (Everyone can view)
router.get("/:id", getBookById);

// ✅ Add a new book (Librarians & Admins only)
router.post("/", authorizeRoles([1, 2]), addBook);

// ✅ Update book details (Librarians & Admins only)
router.put("/:id", authorizeRoles([1, 2]), updateBook);

// ✅ Partially update book details (Librarians & Admins only)
router.patch("/:id", authorizeRoles([1, 2]), patchBook);

// ✅ Delete a book (Admin only)
router.delete("/:id", authorizeRoles([1]), deleteBook);

export default router;
