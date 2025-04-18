import { Request, Response, NextFunction } from "express";
import pool from "../db/db.config";
import { authGuard } from "./authMiddleware";

// 🔹 Middleware to Restrict Access Based on Roles
export const authorizeRoles = (allowedRoles: number[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        authGuard(req, res, async () => {
            try {
                const user_id = (req as any).user.user_id;

                if (!user_id) {
                    res.status(401).json({ message: "Unauthorized: No user ID provided" });
                    return;
                }

                // 🔍 Fetch user role from database
                const userResult = await pool.query("SELECT role_id FROM users WHERE user_id = $1", [user_id]);

                if (userResult.rows.length === 0) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }

                const userRole = userResult.rows[0].role_id;

                if (!allowedRoles.includes(userRole)) {
                    res.status(403).json({ message: "Access denied: Insufficient permissions" });
                    return;
                }

                next();
            } catch (error) {
                console.error("Authorization error:", error);
                if (!res.headersSent) {
                    res.status(500).json({ message: "Internal server error" });
                }
            }
        });
    };
};
