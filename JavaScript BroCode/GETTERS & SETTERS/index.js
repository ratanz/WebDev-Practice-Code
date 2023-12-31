// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height= newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}`;
    }
}

const rectangle = new Rectangle(3,6);

rectangle.width = 5;
rectangle.height = 2;

// console.log(rectangle.width)
// console.log(rectangle.height)

// - - - - - - - - - - - - - - - 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("Last name must be non empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be non empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be non-negative number :)")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this.lastName;
    }

}

const person = new Person("Anushka", "cutie", 21);

console.log(`The name is ${person.firstName} who is ${person.lastName} and the age is ${person.age}`);
// console.log(`The name is ${person.fullName} and age is ${person._age}`);

