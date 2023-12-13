function faultyCalculator(num1, num2, operator) {
    let result;
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 1) { // 10% chance to perform wrong operation
        switch (operator) {
            case '+':
                result = num1 - num2;
                break;
            case '-':
                result = num1 / num2;
                break;
            case '*':
                result = num1 + num2;
                break;
            case '/':
                result = num1 ** num2;
                break;
            default:
                console.log("Invalid operator");
                return;
        }
    } else { // 90% chance to perform correct operation
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    console.log("Cannot divide by zero");
                    return;
                }
                break;
            default:
                console.log("Invalid operator");
                return;
        }
    }

    return result;
}