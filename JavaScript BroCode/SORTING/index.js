// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// let numbers = [1,10,3,7,4,2,6,5,8,9];

// numbers.sort((a,b) => a - b);

// console.log(numbers);

// - - - - - - - Ex 2 - - - - - - - - 

const people = [{name: "Spongebob", age : 30, gpa: 3.0},
                {name : "Patrick", age : 10, gpa : 1.5}, 
                {name : "Squidward", age : 51, gpa : 2.5}, 
                {name : "Sandy", age: 27, gpa : 4.0 }]

// people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name)); // lexicographically order of sorting 

console.log(people);

