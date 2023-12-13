console.log("this is code of strings");

let a = "Ratan";
console.log(a); 
console.log(a.length);

let real_name = "ACeu"
let friend = "Virat"
console.log("his name is " + real_name + " and his friends name is " + friend);
console.log(`his name is ${real_name} and his friends name is ${friend}`);

let b = "Rohit"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length)

console.log(b.slice(1,4))

console.log(b.replace("oh", "77")) // if there is two occurrence only first one will get replaced

console.log(b.concat(" ", a, " ", "Virat"))