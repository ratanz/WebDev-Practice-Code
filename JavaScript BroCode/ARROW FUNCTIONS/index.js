// arrow functions = a concise way to write function expressions
//                                 good for simple functions that you use only once
// function hello(){
//     console.log('hello');

// }

// hello();

// using arrow

// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`you are ${age} years old`);
// };
// hello("ratan" , 21);


// - - - - - - - -

// setTimeout(function(){
//     console.log('bye');

// }, 3000);

// setTimeout(() => console.log('hello'), 3000);

const numbers = [1, 2, 4, 5, 6, 7];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(cubes);
console.log(total);