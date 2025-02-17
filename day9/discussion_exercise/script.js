const user = {
    id: "USER-123456",
    name: {
        first: "Alice",
        last: "Liddell"
    },
    email: "alice@example.com",
    address: {
        shipping: {
            street: "123 Rabbit Hole",
            city: "Wonderland",
            state: "Fantasy",
            postalCode: "12345", country: "WL"
        },
        billing: {
            street: "456 Mad Hatter Lane",
            city: "Tea Party",
            state: "Fantasy",
            postalCode: "67890",
            country: "WL"
        }
    },
    payment: {
        total: "100.00",
        currency: "USD",
        details: {
            subtotal: "75.00",
            tax: "15.00",
            shipping: "10.00"
        },
        transactions: [
            {
                id: "TXN-123", amount: "50.00", description: "Magic Potion"
            },
            {
                id: "TXN-456", amount: "50.00", description: "Enchanted Sword"
            }
        ]
    }
};


const {
    id: userId,
    name: { first, last },
    email,
    address: {
        shipping: { street, city, state, postalCode, country },
        billing: {
            street: myStreet,
            city: myCity,
            state: myState,
            postalCode: postal,
            country: myCountry,
        },
    },
    payment: {
        total,
        currency,
        details: { subtotal, tax, shipping },
        transactions, //[
        //     { id: transactionId1, amount: amount1, description: description1 },
        //     { id: transactionId2, amount: amount2, description: description2 },
        // ],
    },
} = user;

// Inject Personal Information
document.getElementById("personal-info").innerHTML = `
    <h2>Personal Information</h2>
    <p><strong>Name:</strong> ${first} ${last}</p>
    <p><strong>Email:</strong> ${email}</p>
`;

// Inject Shipping Address
document.getElementById("shipping-address").innerHTML = `
    <h2>Shipping Address</h2>
    <p>${street}, ${city}, ${state}, ${postalCode}, ${country}</p>
`;

// Inject Billing Address
document.getElementById("billing-address").innerHTML = `
    <h2>Billing Address</h2>
    <p>${myStreet}, ${myCity}, ${myState}, ${postal}, ${myCountry}</p>
`;

//Display Transactions Using .map()
document.getElementById("transactions").innerHTML = `
    <h2>Transactions</h2>
    <ul>
        ${transactions
            .map(txn => `<li><strong>${txn.id}:</strong> ${txn.description} - $${txn.amount}</li>`)
            .join("")}
    </ul>
`;



