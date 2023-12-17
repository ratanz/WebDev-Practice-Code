// spread operator = ...allows an iterable such as an 
                    // array or string to be expanded
                    // into separate elements
                    // (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)

console.log(maximum); // NaN

// - - - - - - - - - - - - - - - 

let username = "R a t a n"
let letters = [...username].join("-")

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "potatoes"];

let foods = [...fruits, ...vegetables , "eggs", "milk"];

console.log(foods);
