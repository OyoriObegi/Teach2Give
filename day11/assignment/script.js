// Fetch data from JSON Server
async function fetchData(url) {
    try {
        let response = await fetch('http://localhost:3000/books')
        let books = await response.json()
        console.log("Data Fetched Successfully", books)

    } catch (error) {
        console.error('Error fetching books:', error)
    }
}

function evaluateBooks(books, callback) {
    return books.map(callback)
}

function flagSpecial(books) {
    if (books.genre === 'Dystopian') {
        console.log('Caution: Dystopian Future⚠️')
    }
    if (books.genre === 'Fiction') {
        console.log('Caution: Fiction Future⚠️')
    }
    if (books.genre === 'Romance') {
        console.log('Caution: Romance Future⚠️')
    }
    if (books.genre === 'Fantasy') {
        console.log('Caution: Fantasy Future⚠️')
    }
    if (books.genre === 'Adventure') {
        console.log('Caution: Adventure Future⚠️')
    }
    if (books.genre === 'Historical Fiction') {
        console.log('Caution: Historical Fiction Future⚠️')
    }
    if (books.genre === 'Epic Poetry') {
        console.log('Caution: Epic Poetry Future⚠️')
    }
    if (books.pages > 500) {
        console.log("Long Read Alert!⚠️")
    }
}



async function processBooks() {
    try {
        let books = await fetchData(); // Fetch data from data.json
        let flaggedBooks = evaluateBooks(books, flagSpecialBooks);

        console.log("Processed Books:", flaggedBooks);
    } catch (error) {
        console.error("Error processing books:", error);
    }
}


processBooks();
