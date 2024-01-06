// console.time() = tool that allows you to measure the time it takes
// for a section of code or process to execute
// Great for identifying performance "bottlenecks"   

// console.time("test"); // how much time to perform task can be checked by time and timeEnd method

// for(let i = 10; i < 100; i++){
//     console.log("this is a for loop")
// }

// console.timeEnd("test");

//  - - - - - - -

console.time("data");

function loadData(){
    for(let j = 0; j < 100; j++){
    
    }

    console.timeEnd("data");
}

function processData(){

    console.time("processData");

    for (let i = 0; i < 900; i++) {
      
        console.log("processing some data")
        
    }

    console.timeEnd("processData");
}

loadData();
processData();
