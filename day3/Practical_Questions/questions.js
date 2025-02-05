// Question 1: Declaring Variables

let age = 25
const schoolName = "Greenwood High"
let studentsList = []
// var: can be redeclared and updated.
// let: can be updated but not redeclared.
// const: cannot be updated or redeclared.

// Question 2: Naming Conventions
let $price = 100;
//let 1stPlace = "John"; This naming is invalid
let _score = 89;
let userName = "Alice";

// const #taxRate = 0.16; It is incorrect because it starts with a hash symbol (#), which is not a valid character for variable names in JavaScript.


// Rewritten code snippet to follow best practices:
let myVariableName = "JavaScript"; // used camelCase convention

// Question 3: Identifying Data Types
console.log(typeof "Hello"); // Output: string
console.log(typeof 99); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined

// The data types in this array > let data = ["Kenya", 34, false, { country: "USA" }, null]; are:
//String: "Kenya"
// Number: 34
// Boolean: false
// Object: { country: "USA" }
// Null: null


// We use the BigInt() function or append n to the end of an integer literal.
let bigIntValue1 = BigInt(12345678901234567890);
let bigIntValue2 = 222345678901234567890n;


//Question 4: Objects & Arrays
let person = {
    name: "Alice",
    age: 20,
    city: "Nairobi"
};
person.email = "alice@gmail.com";

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);

// Question 5: Type Coercion
console.log("5" + 2); // Output: 52
console.log("5" - 2); // Output 3

//Convert the string "100" into a number
let num1 = parseInt("100");
let num2 = Number("100"); 

//Convert the number 50 into a string
let str1 = (50).toString();
let str2 = String(50); 

console.log(5 + true); // Result: 6


