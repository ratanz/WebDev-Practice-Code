// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//

const person = {
    firstName : "Spongebob", 
    lastName : "Squarepants",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hi! I am Spongebob")},
    eat : function() {console.log("I am eating a Krabby Patty")}
}

const person2 = {
    firstName : "Patrick", 
    lastName : "Star",
    age : 42,
    isEmployed : false,
    sayHello : () => console.log("Hey! I am Patrick..."), // arrow function
    eat : () => console.log("I am eating roast beef, chicken, and pizza")
}

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);


