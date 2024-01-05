// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }


// - - - - - - - -  


// function createCounter() {



//     let count = 0;
//     function increment() {

//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`)

// - - - - - - - -  

function createGame() {
    let score = 0;

    function increasedScore(points) {
        score += points;
        console.log(`+ ${points}pts`)
    }

    function decreasedScore(points) {
        score -= points;
        console.log(`- ${points}pts`)
    }

    function getScore() {
        return `Your score is ${score}`;
    }

    return {increasedScore , decreasedScore, getScore};
}

const game = createGame();

game.increasedScore(5);
game.decreasedScore(2);
console.log(`The final score is ${game.getScore()} pts`)