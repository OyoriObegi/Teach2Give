// arrays in js are versatile and widely used to store and manipulate ordered collections of values. 
// Creating an array
const marks = [13, 14, 34, 67,33, 78, "oyori"] // a collection of different values
console.log(marks)
// the value of an array can be changed at any particular point

// accessing arrays

//access modifiers
console.log(marks[4])
console.log(marks[-2])

// arrays in JS ar passed by reference not by value.
// This means that when you assign an array to a new variable, both variables point to the same array in the memory. Cahnges to one variable will afferect the other. 

//Modifications in array
// Syntax: arrayName[index] = newValue

const mark = [13, 14, 34, 67,33, 78]
let markAtIndex2 = mark[2]
console.log(markAtIndex2)

//.push is a method used to add elemets to the end of the array

let dennisInfo = []
dennisInfo.push(23)
console.log(`Dennis info: ${dennisInfo}`)

dennisInfo.push(56)
console.log(`Dennis info: ${dennisInfo}`)

dennisInfo.push(80)
console.log(`Dennis info: ${dennisInfo}`)

//.pop is a method used to remove the last element in the array
dennisInfo.pop()
console.log(`Dennis info: ${dennisInfo}`)

//indexOf() - used to get the position of a particular value in the array
const cowInfo = ['Freshian', 'Brown', 160]
console.log(cowInfo.indexOf('Brown'))

// How do we join arrays?
// concat is used to combine 2 arrays
const markMwangi = ['Mark', 23455]
const stan = ['stanley', 29799987]
const combinedArrays = markMwangi.concat(stan)
console.log(combinedArrays)

// joining array elements into one string, use the join method
const months =['jan', 'feb', 'march', 'april']
console.log(months.join())

// adding  unspaced on the join
console.log(months.join(''))

// adding space
console.log(months.join(' '))

//.reverse is used to reverse the array elements
console.log(['C', 'O', 'W'].reverse())

// .splice is used to remove, replace or add elements in array
const siz =['Felistus', 'Nelly', 'Perl']
siz.splice(1,0,'Fatma')
console.log(siz)
siz.splice(1,2, 'Najma', 'Jane')
console.log(siz)
console.log(siz.splice(1))

// slice() method- Used to create a shallow copy of a portion of an array
// will return an array from the starting index to the provided index-1
const bros = ['Mark','Alan', 'Ian', 'Stano']
// use includes() to check if an array contains a specific value

console.log(bros.includes('Mesh'))
console.log(bros.includes('Mark'))

/// Array higher order methods

//filter
//forEach
//reduce
//map

//filter method creates a new array with all elements that pass the test implemented by the provided function
//must have a return keyword

//arayName.filter((value, index, array) => {
    //function body
//});

const availableFoods = [
    {id: "qwe234dfh", name: "burger", image: "🍔", price: 234},
    {id: "qwe234dfx", name: "pizza", image: "🍕", price: 400},
    {id: "qwe234dfy", name: "meat", image: "🥩", price: 500},
    {id: "qwe234dfz", name: "chicken", image: "🍗", price: 2200}
    
]
const filteredFoods = availableFoods.filter((foodObject)=> (
    foodObject.price < 450
)
)
console.log(filteredFoods)

//forEach is used to execute the provided function once for each element in ana array.
//it is ideal for performing operations on array elements without creating a new array. 
// it iterates over each element and performs a given operation
//unlike map or filter, forEach does not return a new array. 
//Syntax: array.forEach(callbackfn, thisArg);

let runners = ['kiplimo', 'kiprotich', 'koskei']
runners.forEach((runner) =>{
    //iterate over each element to perform an oepration
    console.log(`${runner} runs 10kms race`)
})

// let markx = [23,45,67,89,100]
// const averagex = marks.forEach((singleMark) => {
//     let total = 0
//     total += singleMark;
// })

// console.log(total)