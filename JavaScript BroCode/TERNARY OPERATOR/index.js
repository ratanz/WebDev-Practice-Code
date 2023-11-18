let age = 21;
let message = age >= 18 ? "you're and adult " : "You're a small";
console.log(message);

// - - - - - - - - - - - - - - - - 

let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good afternooon";
console.log(greeting);

// - - - - - - - - - - - - - - - - 

let isStudent = true;
let alert = isStudent ? "You are a student" : "You are not a student";

// - - - - - - - - - - - - - - - - 

let purchaseAmount = 383;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);