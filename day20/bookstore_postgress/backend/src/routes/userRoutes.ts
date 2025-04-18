import express from "express";
import { 
    getUsers, 
    getUserById, 
    registerUser, 
    updateUser, 
    patchUser, 
    deleteUser 
} from "../controllers/userController";
import { authorizeRoles } from "../middlewares/roleMiddleware"; // ✅ Import middleware

const router = express.Router();

// ✅ Get all users (Admins & Librarians only)
router.get("/", authorizeRoles([1, 2]), getUsers);

// ✅ Get user by ID (Admins & Librarians only)
router.get("/:user_id", authorizeRoles([1, 2]), getUserById);

// ✅ Register new user (Admin only)
router.post("/", authorizeRoles([1]), registerUser);

// ✅ Update user (Admin & Librarian only)
router.put("/:user_id", authorizeRoles([1, 2]), updateUser);

// ✅ Partially update user (Admin & Librarian only)
router.patch("/:user_id", authorizeRoles([1, 2]), patchUser);

// ✅ Delete user (Admin only)
router.delete("/:user_id", authorizeRoles([1]), deleteUser);

export default router;
