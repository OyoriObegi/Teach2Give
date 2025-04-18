type Book = {
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    description?: string;
    image: string;
    price: number;
};

let books: Book[] = [];

type CartItem = {
    title: string;
    image: string;
    price: number;
    quantity: number;
};

const cart: CartItem[] = [];

async function fetchData(): Promise<void> {
    try {
        const response = await fetch("http://localhost:3000/books");
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        books = await response.json();
        console.log("Data fetched successfully ✅", books);
        displayBooks(books);
    } catch (error) {
        console.log("Sorry, cannot fetch data!", error);
    }
}

function displayBooks(booksToShow: Book[]): void {
    const bookContainer = document.getElementById("bookContainer") as HTMLElement;
    bookContainer.innerHTML = "";
    booksToShow.forEach((book) => {
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
        bookCard.querySelector(".book-cover")?.addEventListener("click", () => openModal(book));
    });
}

function openModal(book: Book): void {
    (document.getElementById("modalTitle") as HTMLElement).textContent = book.title;
    (document.getElementById("modalAuthor") as HTMLElement).textContent = book.author;
    (document.getElementById("modalGenre") as HTMLElement).textContent = book.genre;
    (document.getElementById("modalYear") as HTMLElement).textContent = book.year.toString();
    (document.getElementById("modalPages") as HTMLElement).textContent = book.pages.toString();
    (document.getElementById("modalDescription") as HTMLElement).textContent = book.description || "No description available.";
    (document.getElementById("modalImage") as HTMLImageElement).src = book.image;
    (document.getElementById("bookModal") as HTMLElement).style.display = "block";
}

function closeModal(): void {
    (document.getElementById("bookModal") as HTMLElement).style.display = "none";
}

document.getElementById("searchInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const searchInput = (event.target as HTMLInputElement).value.toLowerCase();
        if (searchInput === "") {
            displayBooks(books);
        } else {
            const filteredBooks = books.filter(
                (book) => book.title.toLowerCase().includes(searchInput) ||
                    book.author.toLowerCase().includes(searchInput)
            );
            displayBooks(filteredBooks);
        }
    }
});

function filterByGenre(): void {
    const selectedGenre = (document.getElementById("genreFilter") as HTMLSelectElement).value;
    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;
    displayBooks(filteredBooks);
}

document.getElementById("genreFilter")?.addEventListener("change", filterByGenre);

function sortBooks(criteria: "year" | "pages", order: "asc" | "desc") {
    let sortedBooks = [...books];

    sortedBooks.sort((a, b) => {
        const valueA = (a[criteria] as number) ?? 0;
        const valueB = (b[criteria] as number) ?? 0;

        return order === "asc" ? valueA - valueB : valueB - valueA;
    });

    displayBooks(sortedBooks);
}


document.getElementById("sortYear")?.addEventListener("click", function () {
    const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
    this.setAttribute("data-order", currentOrder);
    sortBooks("year", currentOrder as "asc" | "desc");
});

document.getElementById("sortPages")?.addEventListener("click", function () {
    const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
    this.setAttribute("data-order", currentOrder);
    sortBooks("pages", currentOrder as "asc" | "desc");
});

fetchData();
