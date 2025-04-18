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
exports.authorizeRoles = void 0;
const db_config_1 = __importDefault(require("../db/db.config"));
const authMiddleware_1 = require("./authMiddleware");
// 🔹 Middleware to Restrict Access Based on Roles
const authorizeRoles = (allowedRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        (0, authMiddleware_1.authGuard)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user_id = req.user.user_id;
                if (!user_id) {
                    res.status(401).json({ message: "Unauthorized: No user ID provided" });
                    return;
                }
                // 🔍 Fetch user role from database
                const userResult = yield db_config_1.default.query("SELECT role_id FROM users WHERE user_id = $1", [user_id]);
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
            }
            catch (error) {
                console.error("Authorization error:", error);
                if (!res.headersSent) {
                    res.status(500).json({ message: "Internal server error" });
                }
            }
        }));
    });
};
exports.authorizeRoles = authorizeRoles;
