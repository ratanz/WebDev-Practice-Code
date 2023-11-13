// let age = 25;

// if(age >= 18){
//     console.log("You are an adult");
// } else {
//     console.log("You are not an adult");
// }

// ----------------

// let time = 9;

// if (time < 12) {
//     console.log("Good Morning");
// }
// else{
//     console.log("Good afternoon");
// }

// ------------------

// let student = false;

// if(student){
//     console.log("You are a student");
// } else {
//     console.log("You are not a student");
// }

// -------------------

// let age = 18;
// let hasLicense = false;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("you have your license")
//     }
//     else{
//         console.log("you do not have your license yet!")
//     }
// }
// else{
//     console.log("you must be 18+ to have a license");
// }

//---------------------- else if below --------------
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `your are too old to drive anywhere`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to drive in the US`;
  } else if (age == 17) {
    resultElement.textContent = `You will turn 18 soon!`;
  } else if (age < 0) {
    resultElement.textContent = `your age can't be below 0`;
  } else {
    resultElement.textContent = `You are too young to drive in the US`;
  }
};
