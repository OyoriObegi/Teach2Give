import express from "express";
import { signup, login, logout } from "../controllers/authController";
import { authGuard } from "../middlewares/authMiddleware"; 

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", authGuard, logout); 

export default router;
