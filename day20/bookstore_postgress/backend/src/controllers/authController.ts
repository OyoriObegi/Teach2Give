import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db/db.config";
import asyncHandler from "../middlewares/asyncHandler"; // ✅ Import async handler

// 🔹 Signup Controller (Wrapped with asyncHandler)
export const signup = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, role_id } = req.body;

    // Check if user already exists
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database
    const newUser = await pool.query(
        "INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, hashedPassword, role_id]
    );

    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
});

// 🔹 Login Controller (Wrapped with asyncHandler)
export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if user exists
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userResult.rows.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = userResult.rows[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
        { user_id: user.user_id, role_id: user.role_id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
});

// 🔹 Logout Controller (Wrapped with asyncHandler)
export const logout = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: "Logout successful. Clear token on client-side." });
});
