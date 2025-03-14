import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import userRoutes from "./routes/userRoutes";
import pool from "./db/db.config"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ 
    origin: "http://localhost:5173", 
    methods: "GET, PUT, DELETE, POST", 
    credentials: true 
}));

app.use(express.json());

// Routes
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/users", userRoutes);

// Default Route (Health Check)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Bookstore API!" });
});

// Global Error Handling Middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});
