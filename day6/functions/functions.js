// a function is a block of code that executes a certain functionality 
// eg fetching data from an online API, clacualting average
// the function keyword is used to define a function
// aa function must have a ()

//a normal function syntax
function nameOfTheFunction() { }
// an arrow function
const functionName = () => { }

// Inside the parenthesis you put your code to be execute
//const salesData = require('./data.json')
function fetchSale() {
    //this is where the code to execute will be written
    console.log(salesData);
}

// some functions may have a return value
//we define a return value using a return keyword
//the return keyword is used to return the value needed by that function
// a function can also have an argument
// an argument is a representation of data type to be passed as an input and later when the argument is passed.

function myGoodFn(data) {
    return data
}
//if you return inside the function, to print you need to put the function 
// inside console log
console.log(myGoodFn({name:"Alamin", laptop: "Lenovo"}))
console.log(myGoodFn([23, "Alamin",  "Lenovo"]))

function average(marksArray) {
    //based on marksArray that I will pass later, 
    // I will do some manipulations here.
    //Get the total and then get the average. 
    let total = 0
    // get the average = total marks/total number of students
    for(const mark of marksArray){
        total =total + mark
    }
    let average = 0
    average = total / marksArray.length
    return `total is: ${total} and average is: ${average}`
}
console.log(average([123, 445, 334]))

// adding a return type to arrow functions
const circleArea = (radius) => {
    return `The area of a circle is: ${Math.PI * radius**2}`
}
console.log(circleArea(7))

//arrow functions sometimes can return immediately and dont need a return keyword
const circleArea1 = (radius) => (
    `The area of a circle is: ${Math.PI * radius**2}`
)
console.log(circleArea1(7))

//immediately invoked function is a function that runs immediately invoked without being called.
//(function fnName() {})


