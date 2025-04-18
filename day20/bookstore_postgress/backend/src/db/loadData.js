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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db_config_1 = __importDefault(require("./db.config")); // Ensure this is your DB connection file
// Get the path of the data.json file
const dataFilePath = path_1.default.join(__dirname, "data.json");
// Read the JSON file
const loadBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawData = fs_1.default.readFileSync(dataFilePath, "utf-8");
        const books = JSON.parse(rawData).books;
        for (const book of books) {
            const { title, author, genre, year, pages, price, publisher, description, image } = book;
            // Ensure all fields are not undefined (Force default values)
            const finalYear = year !== null && year !== void 0 ? year : 0;
            const finalPages = pages !== null && pages !== void 0 ? pages : 0;
            const finalPrice = price !== null && price !== void 0 ? price : 0;
            const finalPublisher = publisher !== null && publisher !== void 0 ? publisher : "Unknown Publisher";
            const finalDescription = description !== null && description !== void 0 ? description : "No description available.";
            const finalImage = image !== null && image !== void 0 ? image : "No image available";
            console.log(`📖 Inserting: ${title}, ${author}, ${finalYear}, ${finalPages}, ${finalPrice}`);
            // Check if the book already exists
            const existingBook = yield db_config_1.default.query("SELECT id FROM books WHERE title = $1 AND author = $2", [title, author]);
            if (existingBook.rows.length === 0) {
                yield db_config_1.default.query(`INSERT INTO books (title, author, genre, year, pages, price, publisher, description, image) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [title, author, genre, finalYear, finalPages, finalPrice, finalPublisher, finalDescription, finalImage]);
                console.log(`✅ Inserted: ${title}`);
            }
            else {
                console.log(`⏩ Skipped (already exists): ${title}`);
            }
        }
        console.log("🎉 All books loaded successfully!");
        process.exit(); // Exit script after completion
    }
    catch (error) {
        console.error("❌ Error loading books:", error);
        process.exit(1);
    }
});
// Run the script
loadBooks();
