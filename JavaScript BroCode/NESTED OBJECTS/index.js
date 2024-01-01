// nested objects = Objects inside of other Objects.
// Allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "Bikini Bottom",
        city: "Bubbletown",
        country: "Underwater Kingdom"

    }

}

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// console.log(person.fullName);
// console.log(person.hobbies[2]);
// console.log(person.address.country);
// console.log(person.address.city);
// console.log(person.address.street);

// - - - - - - - example 2 - - - - - - - 

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Underwater kingdom");

const person2 = new Person("Patrick", 34, "128 Conch St.", "Bikini Bottom", "Underwater kingdom");

const person3 = new Person("Patrick", 44, "126 Conch St.", "Bikini Bottom", "Underwater kingdom");

console.log(`The name is ${person1.name}`);
console.log(person1.address);