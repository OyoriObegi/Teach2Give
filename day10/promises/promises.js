// syntax:
// new promise((resolve, reject) => {})

let promise = new Promise((resolve, reject) => {

    // Asynchronous operation

    if ("operation successful" ) {

        resolve('Success message'); // Resolve with a suc

    } else {

        reject('Error message'); // Reject with an error

    }

});

console.log(promise)

// Handling callback Hell with promises
