type Book = {
    id: number;
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

// Fetch books with optional filters and sorting using query params
async function fetchData(): Promise<void> {
    try {
        const response = await fetch("/books");
        const books = await response.json();
        displayBooks(books);
        function displayBooks(booksToShow: Book[]): void {
            const bookContainer = document.getElementById("bookContainer") as HTMLElement;
            bookContainer.innerHTML = ""; // Clear previous content

            booksToShow.forEach((book) => {
                const bookCard = document.createElement("div");
                bookCard.classList.add("book-card");

                bookCard.innerHTML = `
                    <img src="${book.image}" alt="${book.title}" class="book-cover" data-id="${book.id}">
                    <h3>${book.title}</h3>
                    <p><strong>Year:</strong> ${book.year}</p>
                    <p><strong>Pages:</strong> ${book.pages}</p>
                    <p class="price">$${book.price}</p>
                    <div class="buy-and-cart">
                        <button class="add-cart" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}" data-image="${book.image}">Add to Cart</button>
                    </div>
                `;

                bookContainer.appendChild(bookCard);
            });

            function fetchBookById(bookId: number) {
                throw new Error("Function not implemented.");
            }

            function addToCart(title: string, price: number, image: string) {
                throw new Error("Function not implemented.");
            }

            // Attach event listeners to book images for fetching details
            document.querySelectorAll(".book-cover").forEach((img) => {
                img.addEventListener("click", (event) => {
                    const target = event.target as HTMLImageElement;
                    const bookId = parseInt(target.getAttribute("data-id")!);
                    fetchBookById(bookId); // Fetch details for the clicked book
                });
            });

            // Attach event listeners to "Add to Cart" buttons
            document.querySelectorAll(".add-cart").forEach((button) => {
                button.addEventListener("click", (event) => {
                    const target = event.target as HTMLButtonElement;
                    const title = target.getAttribute("data-title")!;
                    const price = parseFloat(target.getAttribute("data-price")!);
                    const image = target.getAttribute("data-image")!;

                    addToCart(title, price, image);
                });
            });
        }

        // Search functionality (uses query params)
        document.getElementById("searchInput")?.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const searchInput = (event.target as HTMLInputElement).value;
                
            }
        });

        function sortData() {
            const queryParams = new URLSearchParams();
            const genreFilter = document.getElementById("genreFilter") as HTMLSelectElement;
            const searchInput = document.getElementById("searchInput") as HTMLInputElement;
            const genre = genreFilter.value;
            if(genre !== 'All') queryParams.append("genre", genre)
            if(searchInput.value) queryParams.append("search", searchInput.value)
            genreFilter.addEventListener("change", sortData)
        }

        sortData()


        // Genre filter (uses query params)
        // document.getElementById("genreFilter")?.addEventListener("change", (event) => {
        //     const selectedGenre = (event.target as HTMLSelectElement).value;
        // });

        // Sorting functionality (uses query params)
        document.getElementById("sortYear")?.addEventListener("click", function () {
            const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
            this.setAttribute("data-order", currentOrder);
        });

        document.getElementById("sortPages")?.addEventListener("click", function () {
            const currentOrder = this.getAttribute("data-order") === "asc" ? "desc" : "asc";
            this.setAttribute("data-order", currentOrder);
        });

        // Initial fetch to display all books
                fetchData();
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        }
        
        // Initial fetch to display all books
        fetchData();