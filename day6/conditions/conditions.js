// Conditions are important in controlling the flow of a program based on certain conditions.

//Basic if statement: evaluates a condition and executes if the codition is met

let showering = true
if(showering) {
    console.log("You are a good boy")
}

//if the condition was not satisfied  then there is a fallback with the else statement. 

let heShowed = false
if (heShowed){
    console.log("You are a good boy")
} else {
    console.log( "You are a bad boy")
}

// in some situations you can have multiple fallbacks
// else if, else if, ....else. This means you have multiple conditions

let marks = 0
let grade = ''
function myGrade(mark){
    if(mark > 89) {
        grade = 'A'
    } else if(mark > 70){
        grade = 'B'
    } else if(mark > 50){
        grade = 'C'
    } else if(mark > 30){
        grade = 'D'
    } else {
        grade = 'E'
    }
    return grade
}

console.log(`Your grade is: ${myGrade(78)}`)

// later we shall learn ES6 syntax for conditions
//let functionName = condition ? executeThis: (else) executeThis2

const myGrade1 = (mark) => {
    return mark >= 90 ? 'A': // this is the ellse if
            mark >= 70 ? 'B': // this is the ellse if
            mark >= 50 ? 'C': // this is the ellse if
            mark >= 30 ? 'D': // this is the ellse if
            'Invalid input marks' // this is the else block
}
console.log(`Your grade is: ${myGrade1(120)}`)