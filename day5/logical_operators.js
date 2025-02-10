let result = '2' || '3' || 'Alamin'
if(result == '2' || result == '3' || result == 'Alamin'){
    console.log('available')
} else { 
    console.log('unavailable')
}

//Logical AND (&&)
//Returns true only if both opernds are true. If either operand is false, the result is false

//Logical &&

//returns true only if both operands are true

//if one side is false, it will result to false

console.log(true & true) //true
console.log(false & true) //false
console.log(true && false) //false
console.log(false && false) //false
let a = 5, b = 10;
console.log(a < b && b > a) //true
console.log(a > b && b > a) //false 

let user = {isLoggedIn: true, hasPermission: true};
if(user.isLoggedIn && user.hasPermission){
    console.log("Access Granted");
}

// The logical operator OR returns true if one side is true.
// Returns false if both operands are false

let x = 5;

let y = 10;

console.log(x < y || y < x); // true: one condition is true

console.log(x > y || y < x); // false: both conditions are false

let userName = '';

let displayName = userName|| 'Guest';

console.log(displayName); // "Guest" since username is empty

// Explanation: In the first example, ab is true, so the result is true. 
// In the second example, both conditions are false, so the result is false. 
// In the third example, username is falsy (an empty string), so displayName is set to 'Guest'


///The Logical not ! checks the opposite of the equation

console.log(!true) //false
console.log(!false) //true

let isActive = false
if(!isActive) {
console.log("The system is not active")
} else {
console.log("The system is active")

}

// Order of operations
// Operator Precedence

// In JavaScript, logical NOT (1) has higher precedence
// than logical AND (&&), which in turn has higher precedence than logical OR (||). 
// Understanding this precedence is crucial for writing complex conditional statements.

// Example:

let a_ = true;

let b_ = false;

let result = !a_ && (b || true); // !a evaluates First, then &&, th

Explanation: la evaluates to false, so the overall expression evaluates to false regardless of the other operands.

Short-circuit Behavior

Performance: Short-circuiting can improve performance by preventing