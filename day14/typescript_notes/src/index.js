"use strict";
//state is immutable
// mutability is the ability to change the state of an object after it has been created
// immutability is the inability to change the state of an object after it has been created
// In TypeScript, you can make an object or an array immutable by using the `readonly` modifier or the `ReadonlyArray` type.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//primitive types are immutable
let x = 10;
// x = 20; // This will cause a compile-time error
// console.log(x); // Output: 10
// string, number, boolean, undefined, null, symbol, bigint are immutable
//Objects and arrays are mutable by default
// Example of mutable object
let person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed
console.log(person); // Output: { name: "Alice", age: 26 }
// Example of mutable array
let numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // Output: [1, 2, 3, 4]
const user = {
    name: "Alice", // Cannot be changed
    age: 25 // Can be changed
};
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
user.age = 26; // This is allowed because 'age' is not readonly
const ReadOnlyObj = { name: "John", age: 25 };
// ReadOnlyObj.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// ReadOnlyObj.age = 26; // Error: Cannot assign to 'age' because it is a read-only property
//is there a way we can pass the readonly and still change the value of that object?
// Yes, you can use type assertion to override the readonly modifier.
// Example: Using type assertion to override the readonly modifier
const user2 = {
    name: "Alice",
    age: 25
};
// Using Omit to remove the readonly modifier
const mutableUser = Object.assign(Object.assign({}, user2), { age: 26 });
console.log(mutableUser); // Output: { name: "Alice", age: 26 }
// How to pass types to functions in TypeScript
// You can pass types to functions in TypeScript by specifying the types of the parameters and the return type of the function.
// Example: Passing types to functions in TypeScript
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // Output: 3
//sometimes you want to pass a generic type to a function
// Generic types allow you to create functions, classes, or interfaces that work with any data type.
// You can use generic types in TypeScript by specifying a type parameter in angle brackets `<>`.
// Example: Passing a generic type to a function
function identity(arg) {
    return arg;
}
console.log(identity(10)); // Output: 10
console.log(identity("Hello")); // Output: Hello
console.log(identity({ name: "Alice", age: 25 })); // Output: { name: "Alice", age: 25 }
// Passing multiple generic types to a function
// You can pass multiple generic types to a function by specifying multiple type parameters in angle brackets `<>`.
// Example: Passing multiple generic types to a function
function pair(first, second) {
    return [first, second];
}
console.log(pair(1, "one")); // Output: [1, "one"]
console.log(pair("true", true)); // Output: ["true", true]
// arrays in typescript
// Arrays are used to store multiple values in a single variable.
// You can create an array in TypeScript by using square brackets `[]` and specifying the type of the elements.
// Example: Creating an array in TypeScript
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
const marks = [80, 85, 90];
console.log(marks); // Output: [80, 85, 90]
// promises in typescript
// Promises are used to handle asynchronous operations in JavaScript.
// You can create a promise in TypeScript by using the `Promise` class.
// Example: Creating a promise in TypeScript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};
fetchData().then((data) => {
    console.log(data); // Output: Data fetched successfully!
});
const data = {
    uid: "hdjhsjhdj",
    uName: 'jhjdhjs',
    isAdmin: false
};
const fetchData2 = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
});
fetchData2().then((userData) => {
    console.log(userData); // Output: { uid: "hdjhsjhdj", uName: 'jhjdhjs', isAdmin: false }
});
// Array of userType
const users = [
    { uid: "1", uName: "Alice", isAdmin: true },
    { uid: "2", uName: "Bob", isAdmin: false },
    { uid: "3", uName: "Charlie", isAdmin: false }
];
console.log(users);
// How to use async/await with promises in TypeScript
// You can use the `async` and `await` keywords to work with promises in TypeScript.
// The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to wait for a promise to resolve.
// Example: Using async/await with promises in TypeScript
const fetchData3 = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData3();
    console.log(data); // Output: Data fetched successfully!
});
main();
//sets in typescript
// A set in javascript is a collection of unique values
// In typescript it is  types using Set<Type>
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Set will only store unique values, so 2 will only be added once
console.log(mySet); // Output: Set(2) { 1, 2 }
// Creating an empty set with specific types
const emptySet = new Set();
console.log(emptySet); // Output: Set(0) {}
// Maps in Typescript
// A map is a collection of key-value pairs
// In typescript it is typed using Map<KeyType, ValueType>
const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
console.log(myMap); // Output: Map(2) { 'one' => 1, 'two' => 2 }
//Type assertion and casting 
//Use as syntax
//use angle bracket syntax
let str = "Hello World";
let strLength = str.length;
console.log(strLength); // Output: 11
//angle bracket syntax
let str2 = "Hello World";
let strLength2 = str2.length;
console.log(strLength2); // Output: 11
// void keyword means there is no return word
//example
function logMessage(message) {
    console.log(message);
}
logMessage("This is a message"); // Output: This is a message
