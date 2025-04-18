// a boolean is a true or false value

const isAdmin = true
const isStudent = false

// logically how to apply booleans

function showPaymentModule(args) {
    // this can be angular/react componet
    if(args == true) {
        console.log("You have access")
    } else {
        console.log("You dont have access")

    }
    }
    //
// boolean contexts - booleans are often used in context of comparisons and logical operators
// == checks if the values are equal only
// === checks if the value are equal and the type are equal
// use == or ===

// booleans can also be used to check inequality
// we use != or !== 

console.log(6 != 6)
console.log(6 !== 6)
console.log(6 != "6") // only checks the value
console.log(6 !== "6") // checks type and value

// Real example of != comparison using password
import bcrypt from'bcrypt'
const password = "QWEsse@65h"
const hashedPassword = bcrypt.hashSync(password, 10)
console.log(hashedPassword)

const comparedPasswords = bcrypt.compareSync(password, hashedPassword)
console.log(comparedPasswords)


function authLogin() {
    // this can be angular/react componet
    if(comparedPasswords == true) {
        console.log("You have access")
    } else {
        console.log("You dont have access")

    }
    }