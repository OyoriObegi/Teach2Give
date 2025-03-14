"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const roleMiddleware_1 = require("../middlewares/roleMiddleware"); // ✅ Import middleware
const router = express_1.default.Router();
// ✅ Get all users (Admins & Librarians only)
router.get("/", (0, roleMiddleware_1.authorizeRoles)([1, 2]), userController_1.getUsers);
// ✅ Get user by ID (Admins & Librarians only)
router.get("/:user_id", (0, roleMiddleware_1.authorizeRoles)([1, 2]), userController_1.getUserById);
// ✅ Register new user (Admin only)
router.post("/", (0, roleMiddleware_1.authorizeRoles)([1]), userController_1.registerUser);
// ✅ Update user (Admin & Librarian only)
router.put("/:user_id", (0, roleMiddleware_1.authorizeRoles)([1, 2]), userController_1.updateUser);
// ✅ Partially update user (Admin & Librarian only)
router.patch("/:user_id", (0, roleMiddleware_1.authorizeRoles)([1, 2]), userController_1.patchUser);
// ✅ Delete user (Admin only)
router.delete("/:user_id", (0, roleMiddleware_1.authorizeRoles)([1]), userController_1.deleteUser);
exports.default = router;
