import express from "express";
import { getBooks, getBookById, addBook, updateBook, patchBook, deleteBook } from "../controllers/bookController";
import { authorizeRoles } from "../middlewares/roleMiddleware"; // ✅ Role-based access control
import { authGuard } from "../middlewares/authMiddleware"; // ✅ Require authentication

const router = express.Router();

// ✅ Require authentication to view books
router.get("/", authGuard, getBooks);

// ✅ Require authentication to view book by ID
router.get("/:id", authGuard, getBookById);

// ✅ Only Librarians & Admins Can Add Books
router.post("/", authGuard, authorizeRoles([1, 2]), addBook);

// ✅ Only Librarians & Admins Can Update Books
router.put("/:id", authGuard, authorizeRoles([1, 2]), updateBook);

// ✅ Only Librarians & Admins Can Partially Update Books
router.patch("/:id", authGuard, authorizeRoles([1, 2]), patchBook);

// ✅ Only Admin Can Delete Books
router.delete("/:id", authGuard, authorizeRoles([1]), deleteBook);

export default router;
