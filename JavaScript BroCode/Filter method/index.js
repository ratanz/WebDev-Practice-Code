// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

// - - - - - - - - - - - - - - - - -

const ages = [14, 15, 17, 18, 24, 32, 44];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}

// - - - - - - - -  - - - - - - - - -

const words = ["apple", "orange", "kiwi", "banana", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);

function getShortWords(element) {
    return element.length <= 4;
}

function getLongWords(element) {
    return element.length > 5;
}
