console.log("this is promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("No random number no supported");
    }

    setTimeout(() => {
        console.log("Yes i am done");
        resolve("Ratan");
    }, 3000);
});

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("No random number no supported");
    }

    setTimeout(() => {
        console.log("Yes i am done");
        resolve("Ratan");
    }, 1000);
});

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

let p3 = Promise.allSettled([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch(e => {
    console.log(err);
})
