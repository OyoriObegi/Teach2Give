let myName = "" //empty strin
let myBook = "Introduction to JS"
let statement = "I love to code"
let laptopType = 'Lenovo'

//Properties of strings
// 1. length - returns the number of characters in a string

let name = 'Alice'
console.log(name.length) //5

//charAt()- returns the character at the specified indexin a string
// example
let fname = 'Alfred'
console.log(fname.charAt(3))

// concat - concatenates or joins two strings 

//Example
let firstName = 'Julia'
let secondName = "Mwangi"
console.log(firstName.concat(secondName))
console.log(firstName.concat(' '+ secondName))

// IndexOf - returns the index of the first occurrence of a specified value in a string
// example:
const lname = "Ann Kipkoech Key"
console.log(lname.indexOf("K"))

// includes - returns true if a string contains a specified value
console.log(lname.includes("Key"))
console.log(lname.includes("Ke"))

//toLowerCase - converts a string to lower case
//toUpperCase - converts a string to upper case
const userInput = "pRoGraMMing";
console.log("Lowercase:", userInput.toLowerCase()); // Output: "programming"
console.log("Uppercase:", userInput.toUpperCase()); // Output: "PROGRAMMING"

//split - splits a string into an array of strings by separating the strings
 console.log("wendani".split())
 console.log("wendani".split(" "))
 console.log("wendani".split(""))

 // substring - extracts characters from a string between two specified indicies
 // substring (startingIndex, endingIndex-1)
 let sentence = "I am a student"
 console.log(sentence.substring(7,11))

 //substr -extracts parts of the string
 // beginning at the character of the specified position
 // and returns the speciified number of characters
 //substr (startingIndex, numberOfCharacters)
 console.log(sentence.substr(7, 4))

 let sentence1 = "Hellowz my name is Alfred"
 console.log(sentence1.substr(2,5))

 //Trim removes white spaces from both ends of a string
 let sent = "    Hi, I am available"
 console.log(sent)
 console.log(sent.trim())
 console.log(sent.trimStart())
console.log(sent.trimStart().length)
