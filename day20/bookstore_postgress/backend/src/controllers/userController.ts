import { Request, Response } from "express";
import pool from "../db/db.config";
import asyncHandler from "../middlewares/asyncHandler";

// Get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const result = await pool.query("SELECT user_id, name, email FROM users");
    res.status(200).json({ users: result.rows });
});

// Get user by ID
export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);

    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });

    res.status(200).json(result.rows[0]);
});

// Register a new user
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, role_id } = req.body;

    // Check if user already exists
    const userCheck = await pool.query("SELECT user_id FROM users WHERE email = $1", [email]);
    if (userCheck.rows.length > 0) return res.status(400).json({ message: "User already exists" });

    // Insert new user
    const userResult = await pool.query(
        "INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role_id",
        [name, email, password, role_id]
    );

    res.status(201).json({ message: "User successfully registered", user: userResult.rows[0] });
});

// Update a user
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const { user_id } = req.params; 
    const { name, email, password, role_id } = req.body;

    // Check if the user exists
    const userCheck = await pool.query("SELECT user_id FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
    }

    // Update user (PUT replaces all fields)
    const userResult = await pool.query(
        `UPDATE users 
         SET name = $1, email = $2, password = $3, role_id = $4 
         WHERE user_id = $5 RETURNING *`,
        [name, email, password, role_id, user_id]
    );

    res.status(200).json({ message: "User successfully updated", user: userResult.rows[0] });
});

// Update specific fields of a user
export const patchUser = asyncHandler(async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const { name, email, password, role_id } = req.body;

    // Check if the user exists
    const userCheck = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    // ✅ Dynamically build the update query
    let updateFields: string[] = [];
    let values: any[] = [];
    let index = 1;

    if (name) { updateFields.push(`name = $${index++}`); values.push(name); }
    if (email) { updateFields.push(`email = $${index++}`); values.push(email); }
    if (password) { updateFields.push(`password = $${index++}`); values.push(password); }
    if (role_id) { updateFields.push(`role_id = $${index++}`); values.push(role_id); }

    if (updateFields.length === 0) {
        return res.status(400).json({ message: "No fields provided for update" });
    }

    values.push(user_id); // Add user_id to the values array
    const query = `UPDATE users SET ${updateFields.join(", ")} WHERE user_id = $${index} RETURNING *`;

    const updatedUser = await pool.query(query, values);
    res.status(200).json({ message: "User successfully updated", user: updatedUser.rows[0] });
});


// Delete a user
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { user_id } = req.params;

    // Check if user exists
    const userCheck = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0) return res.status(404).json({ message: "User not found" });

    // Delete user
    await pool.query("DELETE FROM users WHERE user_id = $1", [user_id]);
    res.json({ message: "User deleted successfully" });
});
