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
exports.logout = exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_config_1 = __importDefault(require("../db/db.config"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler")); // ✅ Import async handler
// 🔹 Signup Controller (Wrapped with asyncHandler)
exports.signup = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role_id } = req.body;
    // Check if user already exists
    const existingUser = yield db_config_1.default.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: "User already exists" });
    }
    // Hash password before saving
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    // Insert new user into database
    const newUser = yield db_config_1.default.query("INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, hashedPassword, role_id]);
    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
}));
// 🔹 Login Controller (Wrapped with asyncHandler)
exports.login = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Check if user exists
    const userResult = yield db_config_1.default.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userResult.rows.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const user = userResult.rows[0];
    // Compare passwords
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jsonwebtoken_1.default.sign({ user_id: user.user_id, role_id: user.role_id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
}));
// 🔹 Logout Controller (Wrapped with asyncHandler)
exports.logout = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Logout successful. Clear token on client-side." });
}));
