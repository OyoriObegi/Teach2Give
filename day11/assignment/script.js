// Fetch books from the local server and display them on page load
async function fetchBooks() {
    try {
        let response = await fetch("http://localhost:3000/books");
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        let books = await response.json();
        displayBooks(books); // Display books on the page
        return books;
    } catch (error) {
        console.error("❌ Error fetching books:", error);
    }
}

// Function to display books dynamically
function displayBooks(books) {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = ""; // Clear existing books before adding new ones

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-cover" onerror="this.src='fallback-image.jpg';">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
        `;
        bookCard.onclick = () => openModal(book);
        bookContainer.appendChild(bookCard);
    });
}

// Function to open the modal with book details
function openModal(book) {
    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalAuthor").textContent = book.author;
    document.getElementById("modalGenre").textContent = book.genre;
    document.getElementById("modalYear").textContent = book.year;
    document.getElementById("modalPages").textContent = book.pages;
    document.getElementById("modalDescription").textContent = book.description || "No description available.";
    document.getElementById("modalImage").src = book.image;
    document.getElementById("modalImage").onerror = () => { 
        document.getElementById("modalImage").src = 'fallback-image.jpg';
    };
    document.getElementById("bookModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}

// Function to filter books by search input
function searchBooks(books) {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput)
    );
    displayBooks(filteredBooks);
}

// Function to filter books by genre
function filterByGenre(books) {
    const selectedGenre = document.getElementById("genreFilter").value;
    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;
    displayBooks(filteredBooks);
}

// Function to sort books dynamically
function sortBooks(criteria) {
    fetchBooks().then(books => {
        const sortedBooks = books.sort((a, b) => a[criteria] - b[criteria]);
        displayBooks(sortedBooks);
    });
}

// Event listeners for search and filter
document.getElementById("searchInput").addEventListener("input", () => fetchBooks().then(searchBooks));
document.getElementById("genreFilter").addEventListener("change", () => fetchBooks().then(filterByGenre));

// Load books when the page loads
fetchBooks();
