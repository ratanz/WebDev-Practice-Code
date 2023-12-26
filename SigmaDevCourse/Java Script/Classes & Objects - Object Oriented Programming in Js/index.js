class Animal {
    constructor(name) {
        this.name = name;
        console.log("object is created...");
    }

    eats() {
        console.log("it is eating");
    }
    jumps() {
        console.log("It is jumping");
    }
}

class Lion extends Animal { 
    constructor(name){
        super(name);
        console.log('Object is created and it is Lion');
        
    }
    eats() {
        super.eats();
        console.log("it is eating roar");
    }
}

let a = new Animal("Bunny");
console.log(a);

// a.eats();
// a.jumps();

let l= new Lion("Shera")
console.log(l)