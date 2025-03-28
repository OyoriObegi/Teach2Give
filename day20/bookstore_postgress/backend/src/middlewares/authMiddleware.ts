import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler"; // ✅ Import async handler

// Define extended Request type with user data
interface AuthRequest extends Request {
    user?: any;
}

// 🔹 Middleware to Check Authentication (With Debugging)
export const authGuard = asyncHandler(async (req: AuthRequest, res: Response, next: NextFunction) => {
    console.log("🔍 [authGuard] Checking Authentication...");

    const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token

    if (!token) {
        console.log("❌ [authGuard] No Token Provided!");
        return res.status(401).json({ message: "Unauthorized. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        console.log("✅ [authGuard] User Authenticated:", decoded);
        next();
    } catch (error) {
        console.log("❌ [authGuard] Invalid Token:", error);
        return res.status(401).json({ message: "Invalid token" });
    }
});
