
// constructor = special method for defining the
// properties and methods of objects


function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () { console.log(`You drive the ${this.model}`) }

}

const car1 = new Car("BMW", "M4", 2024, "red");
const car2 = new Car("Audi", "V8", 2027, "black");
const car3 = new Car("Ford", "Mustang", 2023, "wine red");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log("- - - - -");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log("- - - - -");

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

