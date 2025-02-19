// Js is a powerful language that is used to create interactive and dynamic web pages.
//Synchronous programming means that tasks are performed one after another. 
// Each task waits for the previous one to finish before it starts. 
// Sequential execution allows each line of code to run one after another
// simple flow is straighforward because it follows a clear linear path

// Example: Connecting to a database
function connectDB(db) {
    //code for connecting to the DB
}

function fetchData() {
    connectDB(mongoDBInstance)
    // fetching data
}

// Asynchronous Programming
// Allows multiple tasks to b processed concurrently (at the same time)

//Non-Blocking: Lets other operations run while waiting for a task to complete
//Event-driven: Uses event loop to manage asynchronous tasks ensuring that the other code run while waiting for a task to finish.

async function connectDB1(db) {
    //code for connecting to the DB
    await connectURL
}

async function fetchData1() {
    await connectDB1(mongoDBInstance)
    // fetching data
}

// How to handle asynchronous code
//  1. Callbacks
//  2. Promises
//  3. Async/Await


//What is an event loop?
// it enables non-blocking. 
// It is responsible for managing the execution of code, collecting and processing of EventSource, executing queued tasks

/*
Components of the Event Loop

1. Call Stack: Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.

2. Web APIs: Provides browser features like setTimeout, DOM events, and HTTP requests. These APIs handle asynchronous operations.

3. Task Queue (Callback Queue): Stores tasks waiting to be executed after the call stack is empty. These tasks are queued by setTimeout, setInterval, or other APIs.

4. Microtask Queue: A higher-priority queue for promises and

MutationObserver callbacks. Microtasks are executed before tasks in the task queue.

5. Event Loop: Continuously checks if the call stack is empty and pushes tasks from the microtask queue or task queue to the call stack for execution.
*/


// Callbacks
// A callback is a function that is passed as an argument in another function and is executed after some operation or event completes
// Are commonly used to handle tasks such as reading files, making network rrquests, or processing dat. 

//Examples of Callbacks
// 1. Basic Callback Function

function addCallback(z, callbackfn) {
    return callbackfn(z, 6)
}

function add(a, b) {
    return a + b
}

console.log(addCallback(10, add))

//Example
const arr = [1, 2, 3, 4, 5, 6]
const double = arr.map((num) => (num * 2))
console.log(double)

// The map() method doubles each number in an array

//Lets demo a netflix exampleto get details of a certain video
// 1. login to netflix
// 2. get all the videos 
// 3. get one video from all the videos

//login to netflix
function loginUser(email, password, callbackfn) {
    setTimeout(() => {
        console.log('We are logging into Netflix')
        callbackfn({ userEmail: email, userPassword: password })
    }, 3000)

}

// Get all the videos
function getAllVideos() {
    // we need the email and password to get all the videos
    setTimeout(() => {
        console.log('We have the recently watched videos')
        callbackfn({ userEmail, videosInfo: ["Star Wars", "The Fightback"] })
    }, 3000)
}

//get details of one video
function getVideoInfo(videosInfo) {
    setTimeout(() => {
        console.log('We have the details of one video')
        callbackfn({ video: videosInfoObj.videosInfo[1] })
    }, 3000)
}

//let's execute the sequence of all asynchronous operations

loginUser("jay@duff.com", "1234gege", (userObj) => {
    console.log(userObj.userEmail);  // Access userObj safely

    // Now call getAllVideos inside this callback
    getAllVideos(userObj, (videosDetailsObj) => {
        console.log(videosDetailsObj);
    });
});


// To solve problems of callbacks we use promises 

