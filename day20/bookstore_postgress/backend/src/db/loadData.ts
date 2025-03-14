import fs from "fs";
import path from "path";
import pool from "./db.config"; // Ensure this is your DB connection file

// Get the path of the data.json file
const dataFilePath = path.join(__dirname, "data.json");

// Read the JSON file
const loadBooks = async () => {
  try {
    const rawData = fs.readFileSync(dataFilePath, "utf-8");
    const books = JSON.parse(rawData).books;

    for (const book of books) {
      const { title, author, genre, year, pages, price, publisher, description, image } = book;

      // Ensure all fields are not undefined (Force default values)
      const finalYear = year ?? 0;
      const finalPages = pages ?? 0;
      const finalPrice = price ?? 0;
      const finalPublisher = publisher ?? "Unknown Publisher";
      const finalDescription = description ?? "No description available.";
      const finalImage = image ?? "No image available";

      console.log(`📖 Inserting: ${title}, ${author}, ${finalYear}, ${finalPages}, ${finalPrice}`);

      // Check if the book already exists
      const existingBook = await pool.query("SELECT id FROM books WHERE title = $1 AND author = $2", [title, author]);
      if (existingBook.rows.length === 0) {
        await pool.query(
          `INSERT INTO books (title, author, genre, year, pages, price, publisher, description, image) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          [title, author, genre, finalYear, finalPages, finalPrice, finalPublisher, finalDescription, finalImage]
        );
        console.log(`✅ Inserted: ${title}`);
      } else {
        console.log(`⏩ Skipped (already exists): ${title}`);
      }
    }

    console.log("🎉 All books loaded successfully!");
    process.exit(); // Exit script after completion
  } catch (error) {
    console.error("❌ Error loading books:", error);
    process.exit(1);
  }
};

// Run the script
loadBooks();
