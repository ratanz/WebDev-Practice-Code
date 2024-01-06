// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay)

// function sayHello(){
//     window.alert("Hello")
// }

// setTimeout(function(){console.log("HEyy")}, 3000);

// const timeoutId = setTimeout(() => console.log("yo"), 2500);

//     clearTimeout(timeoutId);

// html button code -

let timeoutId;

function startTimer() {
  timeoutId =  setTimeout(() => {
        window.alert("Hello bruh")
        console.log("Started")
    }, 3000);
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Stoped")
}