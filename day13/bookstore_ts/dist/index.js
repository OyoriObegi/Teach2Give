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
var _a, _b, _c, _d;
let books = [];
const cart = [];
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:3000/books");
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            books = yield response.json();
            console.log("Data fetched successfully ✅", books);
            displayBooks(books);
        }
        catch (error) {
            console.log("Sorry, cannot fetch data!", error);
        }
    });
}
function displayBooks(booksToShow) {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = "";
    booksToShow.forEach((book) => {
        var _a;
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-cover">
            <h3>${book.title}</h3>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p class="price">$${book.price}</p>
            <div class="buy-and-cart">
                <button class="add-cart">Add to Cart</button>
            </div>
        `;
        bookContainer.appendChild(bookCard);
        (_a = bookCard.querySelector(".book-cover")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => openModal(book));
    });
}
function openModal(book) {
    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalAuthor").textContent = book.author;
    document.getElementById("modalGenre").textContent = book.genre;
    document.getElementById("modalYear").textContent = book.year.toString();
    document.getElementById("modalPages").textContent = book.pages.toString();
    document.getElementById("modalDescription").textContent = book.description || "No description available.";
    document.getElementById("modalImage").src = book.image;
    document.getElementById("bookModal").style.display = "block";
}
function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}
(_a = document.getElementById("searchInput")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const searchInput = event.target.value.toLowerCase();
        if (searchInput === "") {
            displayBooks(books);
        }
        else {
            const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchInput) ||
                book.author.toLowerCase().includes(searchInput));
            displayBooks(filteredBooks);
        }
    }
});
function filterByGenre() {
    const selectedGenre = document.getElementById("genreFilter").value;
    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;
    displayBooks(filteredBooks);
}
(_b = document.getElementById("genreFilter")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", filterByGenre);
function sortBooks(criteria, order) {
    let sortedBooks = [...books];
    sortedBooks.sort((a, b) => {
        var _a, _b;
        const valueA = (_a = a[criteria]) !== null && _a !== void 0 ? _a : 0;
        const valueB = (_b = b[criteria]) !== null && _b !== void 0 ? _b : 0;
        return order === "asc" ? valueA - valueB : valueB - valueA;
    });
    displayBooks(sortedBooks);
}
(_c = document.getElementById("sortYear")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
    this.setAttribute("data-order", currentOrder);
    sortBooks("year", currentOrder);
});
(_d = document.getElementById("sortPages")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
    this.setAttribute("data-order", currentOrder);
    sortBooks("pages", currentOrder);
});
fetchData();
//# sourceMappingURL=index.js.map