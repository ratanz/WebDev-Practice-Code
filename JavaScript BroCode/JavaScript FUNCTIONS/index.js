// function = A selection of reusable code.
// Purpose   = To provide a set of functions that can be used across multiple scripts in the project.
// Declare the code once, use it whenever you want.
// call the function to execute that code.

function hello(username, girlfriend) {
  console.log("Hello World!");
  console.log("Hello!");
  console.log(`Hey! ${username}!`);
  console.log(`Hi! ${girlfriend}!`);
}

hello("ratan", "Gojo");
hello("Aceu", "Giyuu");

// - - - - - - - - - - - - - - - - - - -  - - - - - - -

function add(x, y) {
  let result = x + y;
  return result;
}

function substarct(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// function isEven(number) {
//   if (number % 2 == 0) {
//     return true
//   }
//   else{
//     return false;
//   }
// }

// is even in ternary
function isEven(number) {
  return number % 2 === 0 ? "Yes" : "No";
}

console.log(isEven(13));

// - - - - -

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("aceu@gmail.com"));
console.log(isValidEmail("x.com"));
console.log(isValidEmail("netflix@outlook.com"));
