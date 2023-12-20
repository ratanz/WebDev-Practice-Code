// callback = a function that is passed as an argument to another function
// used to handle asynchronous operations :
// 1. Reading a file
// 2. network requests
// 3. interacting with database

// kind of like - "when you're done, call this text."

hello(goodbye);

function hello(callback) {
    console.log("hello!");
    callback();
}

function wait() {
    console.log("wait!");
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("goodbye!");
}

// - - - - - - - - - - - - - - - - - - 

sum(displayPage, 1, 4)

function sum(callback, x, y) {
    let result = x + y
    callback(result)
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}
