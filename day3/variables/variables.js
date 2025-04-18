// How to declare a variable
let name="";
var students=[];
const marks={};

//Naming conventions
// use camelCase
//start with a letter, a dollar siign or underscore
let x="john"
let y = new Date();
let z = true;

//Types of Data structures
// numbers, strings, boolean, nuuls, undefined, objects, arrays, 

// Numbers
console.log("I aman integer", 4)
console.log("I am a double", 4.23)

//Big ints are for numbers that are greter than 2 power 33-1
//add an n after a big number
const elonMuskWealth =1500000000000000000n

//strings
//Strings are textual data (texts inside quotes, can be single or double quotes)
console.log("My name is Oyori")
console.log('45')
console.log(typeof '45')

//Boolean -true or false
const isAuthenticated = true
const isAdmin = false

//isAuthenticated ? <ShowProfile/> : <ShowAuthPage />

// undefined - have not defined variables 
let student;
console.log(student)

//null ; if the data is empty
const noData = {number: null}
console.log(noData.number)

//Objects
//{} initiate an empty object
let myData = {}
console.log(myData)

//to add data to object use .notation
myData.name = "Oyori Obegi"
myData.university = "Sultan Qaboos"
console.log(myData)


// Arrays
//[]
let isMarried = false
const info = ["Pauline Wangui", 22, "DEKUT", {idNumber: 34567, nationality: "Kenyan"},isMarried]
console.log(info)

//type coersion
console.log(("5"+6));
console.log(typeof("5"+6));
console.log((5+"6"));
console.log(("5"-6));
console.log(typeof("5"-6));