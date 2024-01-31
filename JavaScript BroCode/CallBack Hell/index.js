// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                            degree where the code is difficult to read.
//                            Old pattern to handle asynchronous functions.
//                            Use Promises + async/await to avoid Callback Hell

function task1(callback) {

    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    }, 2000);

}
function task2(callback) {

    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    }, 2000);

}
function task3(callback) {

    setTimeout(() => {
        console.log("task 3 complete");
        callback();
    }, 2000);


}
function task4(callback) {

    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    }, 2000);

}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks complete!");
            })
        })
    })
});