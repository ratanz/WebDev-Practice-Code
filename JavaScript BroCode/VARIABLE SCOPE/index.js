// variable scope = where a variable is recognized and accessible

// 1. local scope - only accessible within the function it's declared in
// 2. global scope - accessible anywhere, declared outside of any functions

let x = 1; // global variable 


function function1(){
    let x = 1; // local variable
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

function1();