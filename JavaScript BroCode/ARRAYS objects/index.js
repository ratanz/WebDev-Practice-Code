const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }];

// console.log(`Name is ${fruits[1].name} | color is ${fruits[1].color} | calories are ${fruits[1].calories}`);

fruits.push({ name: "grapes", color: "purple", calories: 65 });

// fruits.pop();
// fruits.splice(1,3)

// console.log(fruits)


// - - - - - -  ForEach() - - - - - - - 

// fruits.forEach(fruit => console.log(fruit.name))

// - - - - - -  Map() - - - - - - - 

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);



// console.log(fruitNames);
// console.log(fruitColor);
// console.log(fruitCalories);

// - - - - - -  Filter() - - - - - - - 

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFoods = fruits.filter(fruit => fruit.calories < 100);
const highCalFoods = fruits.filter(fruit => fruit.calories > 100);

// console.log(yellowFruits);
console.log(highCalFoods);

// - - - - - -  Reduce() - - - - - - - 

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(minFruit);
