const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    // console.log(typeof guess, guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number bro");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        } else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        } else {
            window.alert(
                `CORRECT! the answer was ${answer}. it took you ${attempts} attempts`);
            running = false;
        }
    }
}
