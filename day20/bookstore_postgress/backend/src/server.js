"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET, PUT, DELETE, POST",
    credentials: true
}));
app.use(express_1.default.json());
// Routes
app.use("/api/v1/books", bookRoutes_1.default);
app.use("/api/v1/users", userRoutes_1.default);
// Default Route (Health Check)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Bookstore API!" });
});
// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});
// Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});
