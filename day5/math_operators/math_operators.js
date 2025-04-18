// we can do basic math in JS

let num1 = 20
let num2 = 23

//addition
console.log(num1 + num2)

// subtraction
console.log(num1 - num2)

// multiplication
console.log(num1 * num2)

// division
console.log(num1 / num2)

//power
console.log(4 ** 2) // 16

// increment and decrement operators
// ++ add one to the value
// -- removes one from the value

// post increment
let salary = 90000
console.log(salary++)
console.log(salary)

// pre increment
let salary1 = 90000
console.log(++salary1)
console.log(salary1)

const marks = [55, 45, 67, 87]
for (let index = 0; index < marks.length; index++) {
    console.log(`${marks.indexOf(marks[index])}: ${marks[index]}`)
    if (index === marks.indexOf(marks[index])) {
        console.log(true)
    } else {
        console.log("I have stopped")
    }
}

// Pre decrement
let num3 = 9
console.log(--num3) //8

// post decrement
let num4 = 9
console.log(num4--)

// Greater than or less tha

console.log(10 < 11)
console.log(10 <= 11)
console.log(10 > 11)
console.log(10 >= 11)

//Math Objects
console.log(typeof Math)
let r = 7
console.log(Math.PI * r ** 2)

let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log('Maximum number is: ', Math.max(...numbers))
console.log('Minimum number is: ', Math.min(...numbers))

//math.random - Returns a pseudo random number between 0 and 1
const invoiceNumber = Math.random()*1000000
console.log(`BSNMTY${Math.floor(invoiceNumber)}`)
//We want to remove invoice number decimals
console.log(Math.floor(invoiceNumber))