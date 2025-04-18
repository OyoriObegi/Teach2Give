// Fetch data from JSON Server
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Stock:</strong> ${product.stock}</p>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
