//Annotation
//Function parameter annotations

let name1 = 'Alfred'
// hovering over name indicates that it has been automatically infered as a srting

// let's annotate it

let name2: string = "Alfred"
console.log(name2)

//Function parameter annotations
const logAlbumInfo = (title: string, trackCount: number, isReleased = 'boolean') => {
}

function add(x: number, y: number): number {
    return x+y;
}

//Annotating variables
let car:string = "Ferarri"
let carTyres:number = 4
let carIsGerman: boolean = true
let example1: symbol = Symbol()
let example2: null = null

//Typescript inference
let marks = [1, 34, 56, 67]
//Ts automatically infered the typr.

//Function parameters must be paseed with annotations
function myInfo(name:string, age:number) {
    //define your function here
}




