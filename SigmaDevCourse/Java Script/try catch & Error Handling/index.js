let a = prompt("Enter a number");

let b = prompt("Enter a second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 5;

    try {
        console.log("The sum is ", sum * x);
        // return true;
    } catch (error) {
        console.log("There was an error with the calculation: " + error);
        // return false;
    }
    finally {
        console.log("files are being close and db connection being closed");
    }
}

let c = main();