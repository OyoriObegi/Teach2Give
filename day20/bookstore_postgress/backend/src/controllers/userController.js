"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.patchUser = exports.updateUser = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
const db_config_1 = __importDefault(require("../db/db.config"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
// Get all users
exports.getUsers = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.query("SELECT user_id, name, email FROM users");
    res.status(200).json({ users: result.rows });
}));
// Get user by ID
exports.getUserById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const result = yield db_config_1.default.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "User not found" });
    res.status(200).json(result.rows[0]);
}));
// Register a new user
exports.registerUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role_id } = req.body;
    // Check if user already exists
    const userCheck = yield db_config_1.default.query("SELECT user_id FROM users WHERE email = $1", [email]);
    if (userCheck.rows.length > 0)
        return res.status(400).json({ message: "User already exists" });
    // Insert new user
    const userResult = yield db_config_1.default.query("INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role_id", [name, email, password, role_id]);
    res.status(201).json({ message: "User successfully registered", user: userResult.rows[0] });
}));
// Update a user
exports.updateUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { name, email, password, role_id } = req.body;
    // Check if the user exists
    const userCheck = yield db_config_1.default.query("SELECT user_id FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
    }
    // Update user (PUT replaces all fields)
    const userResult = yield db_config_1.default.query(`UPDATE users 
         SET name = $1, email = $2, password = $3, role_id = $4 
         WHERE user_id = $5 RETURNING *`, [name, email, password, role_id, user_id]);
    res.status(200).json({ message: "User successfully updated", user: userResult.rows[0] });
}));
// Update specific fields of a user
exports.patchUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { name, email, password, role_id } = req.body;
    // Check if the user exists
    const userCheck = yield db_config_1.default.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }
    // ✅ Dynamically build the update query
    let updateFields = [];
    let values = [];
    let index = 1;
    if (name) {
        updateFields.push(`name = $${index++}`);
        values.push(name);
    }
    if (email) {
        updateFields.push(`email = $${index++}`);
        values.push(email);
    }
    if (password) {
        updateFields.push(`password = $${index++}`);
        values.push(password);
    }
    if (role_id) {
        updateFields.push(`role_id = $${index++}`);
        values.push(role_id);
    }
    if (updateFields.length === 0) {
        return res.status(400).json({ message: "No fields provided for update" });
    }
    values.push(user_id); // Add user_id to the values array
    const query = `UPDATE users SET ${updateFields.join(", ")} WHERE user_id = $${index} RETURNING *`;
    const updatedUser = yield db_config_1.default.query(query, values);
    res.status(200).json({ message: "User successfully updated", user: updatedUser.rows[0] });
}));
// Delete a user
exports.deleteUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    // Check if user exists
    const userCheck = yield db_config_1.default.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    if (userCheck.rows.length === 0)
        return res.status(404).json({ message: "User not found" });
    // Delete user
    yield db_config_1.default.query("DELETE FROM users WHERE user_id = $1", [user_id]);
    res.json({ message: "User deleted successfully" });
}));
