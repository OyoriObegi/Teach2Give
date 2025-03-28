"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const roleMiddleware_1 = require("../middlewares/roleMiddleware"); // ✅ Role-based access control
const authMiddleware_1 = require("../middlewares/authMiddleware"); // ✅ Require authentication
const router = express_1.default.Router();
// ✅ Require authentication to view books
router.get("/", authMiddleware_1.authGuard, bookController_1.getBooks);
// ✅ Require authentication to view book by ID
router.get("/:id", authMiddleware_1.authGuard, bookController_1.getBookById);
// ✅ Only Librarians & Admins Can Add Books
router.post("/", authMiddleware_1.authGuard, (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.addBook);
// ✅ Only Librarians & Admins Can Update Books
router.put("/:id", authMiddleware_1.authGuard, (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.updateBook);
// ✅ Only Librarians & Admins Can Partially Update Books
router.patch("/:id", authMiddleware_1.authGuard, (0, roleMiddleware_1.authorizeRoles)([1, 2]), bookController_1.patchBook);
// ✅ Only Admin Can Delete Books
router.delete("/:id", authMiddleware_1.authGuard, (0, roleMiddleware_1.authorizeRoles)([1]), bookController_1.deleteBook);
exports.default = router;
