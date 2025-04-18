//Object Literals
interface infoTypes{
    name: string,
    age: number,
    areChamps: boolean
}

// when defining object type, we can use curly braces to contain the properties and their types.
const obj: infoTypes = {
    name: "Liverpool",
    age: 129,
    areChamps: true
}

const syntaxObjParam = (info: {}) => {
    console.log(info);
}

const talkToAnimal = (animal: {name: string, type: string, age: number}) => {
    console.log(animal.name, animal.age, animal.type);
}
const cow = {
    name: "Bessie",
    type: "Cow",
    age: 4
}
talkToAnimal(cow);

// we can use ? operator to make the property optional
// let's make age optional
const talkToAnimalOptional = (animal: {name: string, type: string, age?: number}) => {
    console.log(animal.name, animal.age, animal.type);
}
const cat = {
    name: "Whiskers",
    type: "Cat"
}   
talkToAnimalOptional(cat);

const concatName = (user: {first: string, last: string}) => {
    return `${user.first} ${user.last}`;
}
const nameObj = {
    first: "John",
    last: "Doe"
}
console.log(concatName(nameObj));

// we can use type alias to define an object type
type Animal = {
    name: string,
    type: string,
    age?: number
}

//we can add it as a type annotation to a new variable
let cows: Animal = {
    name: "Bessie",
    type: "Cow",
    age: 4
}
console.log(cows);

// let's reuse it
let cats: Animal = {
    name: "Whiskers",
    type: "Cat"
}
console.log(cats);

// we can also use type alias to define function types
const getAnimalDescription = (animal: Animal) => {
    return `${animal.name} is a ${animal.age} year old ${animal.type}`;
}

console.log(getAnimalDescription(cows));
console.log(getAnimalDescription(cats));


//type aliases as basic types
type ID = string | number;
type UserInput = string | number;

const userInput: UserInput = 5;
const userId: ID = "5";

console.log(userInput, userId);

// how do you share types accross modules?
// we can use export keyword to export the type alias
export type student = {
    name: string,
    age: number
}

//to use import in the file needed
// import {student} from "./student";

//Example: make the following code cleaner by using types:
type Rectangle = {
    width: number,
    height: number
}

const getRectangleArea =(rectangle: Rectangle) => {
return rectangle.width * rectangle.height;
}

const getRectanglePerimeter = (rectangle: Rectangle) => {
return 2 * (rectangle.width + rectangle.height);
}

//in typescript, there are multiple ways to define types
//1. object literals
//2. type alias
//3. interface
//4. class
//5. function types
//6. array types
//7. tuple types
//8. union types
//9. intersection types
//10. type guards
//11. type assertions
//12. discriminated unions
//13. index types
//14. mapped types
//15. conditional types
//16. template literal types
//17. import types
//18. global types
//19. typeof type queries
//20. key of type queries
//21. indexed access types
//22. recursive types
//23. conditional types

// object literals
const objLiteral = {
    name: "Liverpool",
    age: 129,
    areChamps: true
}

// type alias
type objAlias = {   
    name: string,
    age: number,
    areChamps: boolean
}

// interface
interface objInterface{
    name: string,
    age: number,
    areChamps: boolean
}

// class
class objClass{
    name: string;
    age: number;
    areChamps: boolean;
    constructor(name: string, age: number, areChamps: boolean){
        this.name = name;
        this.age = age;
        this.areChamps = areChamps;
    }
}


// function types
type objFunction = (name: string, age: number, areChamps: boolean) => void;

// array types
type objArray = string[];

// tuple types
type objTuple = [string, number, boolean];

// union types
type objUnion = string | number | boolean;


// intersection types
type objIntersection = objAlias & objInterface;

// type guards
const isString = (text: any): text is string => {
    return typeof text === "string";
}

// type assertions
const someValue: any = "this is a string";
const strLength = (someValue as string).length;

// discriminated unions
interface Square {
    kind: "square";
    size: number;
}

// index types
type keys = keyof objAlias;

// mapped types
type readOnlyObj = {
    readonly [key in keys]: objAlias[key];
}

// conditional types
type isStringType<T> = T extends string ? "string" : "not string";


