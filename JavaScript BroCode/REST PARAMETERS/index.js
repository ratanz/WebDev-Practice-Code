// rest parameters = (...rest) allow a function to work with a variable 
                //  numbers of arguments by bundling them into an array
                
                // spared = expands an array into separate elements
                // rest = bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza"
const food2 = "burger"
const food3 = "butter"
const food4 = "sushi"
const food5 = "ramen"

// openFridge(food1, food2, food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// - - - - - - - - - - - - - - - - - - - - - 

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

// const total = sum(1,2,3,4,5)

// console.log(`Your total is $${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(65,33,75,90,50)

console.log(total);


// - - - - - - - - - - - - - - - - 

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr", "Batman", "Shaktiman", "Superman" );

console.log(fullName);
