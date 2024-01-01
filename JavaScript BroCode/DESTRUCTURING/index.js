// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// - - - - - - Example 1 - - - - - -
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a)
console.log(b)

// - - - - - - Example 2 - - - - - -

const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(`The first color is ${firstColor}`);
console.log(`The second color is ${secondColor}`);
console.log(`The third color is ${thirdColor}`);
console.log("Other colors are: ", extraColors);


// - - - - - - Example 3 - - - - - -

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName :"Spongebob",
    lastName :"SquarePants",
    age : 30,
    job : "Fry cook"

}

const person2 = {
    firstName :"Patrick",
    lastName :"Star",
    age : 24,

}

const {firstName, lastName, age , job ="Unemployed"} = person2;

// console.log(`The name is - ${firstName} last name is - ${lastName} age is ${age} | and the job is ${job}`);

displayPerson(person1);
