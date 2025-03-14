"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const roleMiddleware_1 = require("../middlewares/roleMiddleware"); // ✅ Import middleware
const router = express_1.default.Router();
// ✅ Get all books (Everyone can view)
router.get("/", bookController_1.getBooks);
// ✅ Get a single book by ID (Everyone can view)
router.get("/:id", bookController_1.getBookById);
// ✅ Add a new book (Librarians & Admins only)
router.post("/", (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.addBook);
// ✅ Update book details (Librarians & Admins only)
router.put("/:id", (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.updateBook);
// ✅ Partially update book details (Librarians & Admins only)
router.patch("/:id", (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.patchBook);
// ✅ Delete a book (Admin only)
router.delete("/:id", (0, roleMiddleware_1.authorizeRoles)([1]), bookController_1.deleteBook);
exports.default = router;
