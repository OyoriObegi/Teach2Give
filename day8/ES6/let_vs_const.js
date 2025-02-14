// A higher version of JS fro ES5.
// is the 6th edition of ECMAScript, which is a standardized version of JavaScript. 
// It introduced major improvements and new features that make JavaScript more powerful and developer-friendly.

/** 
Why is ES6 Important?
Makes JavaScript code cleaner and more readable.
Introduces better ways to handle variables, functions, and objects.
Improves performance and efficiency.
Makes JavaScript more similar to modern programming languages.
*/

// Here are some of the most important features introduced in ES6:

// 1. let and const (Block-Scoped Variables)
// Block-scoped means that variables declared are limited to the block in which they are defined {}. 
        // let: Allows variable declaration with block scope.
        // const: Declares constants that cannot be reassigned.

let name = "Oyori";
name = "John"; // Works fine
      
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable

function example() {
    if(true) {
        let x = 10
        console.log(x) //10
    }
console.log(x) //10
}
// console.log(x)  This will result in an error.

// const is block-scoped and x could not be accessed outside the scope
// var is not block-scoped and x could be accessed outside the scope

// Example 2
const z = 10 // global scope
if(z === 10){
    const z= 20  //blocked scope
    console.log(z)
}
console.log(z)

// the var keyword on a function scope will always affect the global scope variable

// Scope in functions
//Varibales declared with let and const are block-scoped while var is function-scoped

// example
var length = 12 // Global variable
function area() {
    return length * length // Use global length
}
console.log(area())
