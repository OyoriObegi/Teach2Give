"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataFilePath = path_1.default.join(__dirname, "src/db/data.json");
const rawData = fs_1.default.readFileSync(dataFilePath, "utf-8");
const books = JSON.parse(rawData).books;
console.log("✅ Checking Parsed Books Data:");
books.forEach((book) => {
    console.log({
        title: book.title,
        author: book.author,
        genre: book.genre,
        year: book.year,
        pages: book.pages,
        price: book.price,
        publisher: book.publisher,
        description: book.description,
        image: book.image
    });
});
