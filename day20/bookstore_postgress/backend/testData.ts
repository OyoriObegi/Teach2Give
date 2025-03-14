import fs from "fs";
import path from "path";

const dataFilePath = path.join(__dirname, "src/db/data.json");
const rawData = fs.readFileSync(dataFilePath, "utf-8");
const books = JSON.parse(rawData).books;

console.log("✅ Checking Parsed Books Data:");
books.forEach((book: any) => {
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
