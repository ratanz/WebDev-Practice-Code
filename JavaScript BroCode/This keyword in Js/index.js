// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
// this keyword does not work with arrow function i.e => 

const person1 = {
    name : "Spongebob",
    favFood : "Hamburger",
    sayHello : function(){console.log(`Hi i am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name : "Patrick",
    favFood : "Pizaa",
    sayHello : function(){console.log(`Hi i am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

console.log();

person2.sayHello();
person2.eat();