//Destructing Recap

// desstructuring is a feature that helps you access distinct variable objects or arrays
//Syntax: const {prop1, prop2} = objectName

/*
function renderPaymentModule({admin, isAuth}){

}
<renderPaymentModule admin ={1} isAuth = {true}/>

*/

const info = {
    fname: 'Dennis',
    sname: 'Muhia',
    idNumber: 234334334,

}

// Traditional way of accessing values of an object
console.log(info.fname + " " + info.sname)

//Using destructuring
const{fname: firstname, sname: secondname} = info
console.log(`${firstname} ${secondname}`)
const{fname, sname} = info
console.log(`${fname} ${sname}`)

//Default values in array destructuring
//const [element1 = defaultvalue1, element2 = defaultvalue2] = array;

const numbers = [1,2]
const [first = 10, second = 20, third = 30] = numbers
console.log(third)

//object default destructuuring
// const [element1 = defaultvalue1, element2 = defaultvalue2] = array;
const user  = {
    name: 'Alice',
    age: 25
}
const { name, age, country= 'Kenya'} = user

// We have assigned countrry = Kenya by default since it is not available inside user object

console.log(name)
console.log(age)
console.log(country)

// default object values with renaming

const { name: userName, age: userAge, country: userCountry= 'Kenya'} = user

console.log(name)
console.log(age)
console.log(country)

//Destructuring in Arrays
const num = [1,2,3,4]
// traditional way of accessing array
const firstItem = num[0]
const secondItem = num[1]
const thirdItem = num[2]
const forthtItem = num[3]
console.log(firstItem, secondItem, thirdItem, forthtItem)

// use descructuring to access array
const [first1, second1, third1] = num
console.log(first1, second1, third1)

// When dealing with nested objects, destructuring is a convenient feature that allows you to unpack values from objects and arrays 
const user1 = {
    name: 'Alice',
    address: {
    city: 'Wonderland',
    zip: 12345
    }
};
console.log(user1.address.city)

// using descructuring
const {address} = user1
console.log(address)

const {address:  {city, zip}} = user1
console.log(city)

//Destructuring nested arrays
const numbers1 = [1, [2,3], 4]

const [first2, [second2, third2], fourth2]= numbers1
console.log(first2, second2, third2, fourth2)

// Destructuring function parameters




