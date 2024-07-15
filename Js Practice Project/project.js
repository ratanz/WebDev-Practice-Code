// packages
const prompt = require('prompt-sync')();


// 1. Depost some money
const deposit = () => {
    while(true){
        const depositAmount = prompt('How much would you like to deposit? : $');
        const numberDepositAmount = parseInt(depositAmount);
    
        if( isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log('Invalid deposit amount, try again');
        } else {
            return numberDepositAmount;
        }   
    }
};

const depositAmount = deposit()
console.log(`You have deposited ${depositAmount}`);

// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. play again


