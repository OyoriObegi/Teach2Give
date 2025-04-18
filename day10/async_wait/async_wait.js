// Async/await is a feature in JavaScript that helps simplify working with asynchronous code. 
// It allows you to write code that reads almost like synchronous code, making it easier to understand and maintain.

// Async Function
//
// An async function is a function that returns a promise. 
// It is declared with the async keyword before the function definition.

async function myFunction() {
    return "Hi, I am Oyori";
  }
  
// Await Keyword
// The await keyword can only be used inside an async function. 
// It makes JavaScript wait until the promise is resolved and returns the result. 
// It essentially "pauses" the execution of the async function until the awaited promise is settled.

//Example
async function myFn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Done!"), 1000);
    });
  
    let result = await promise; // Wait until the promise resolves
    console.log(result); // "Done!"
  }
  

  

