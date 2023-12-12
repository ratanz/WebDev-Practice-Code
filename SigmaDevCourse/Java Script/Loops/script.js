console.log("code of loops");

// for loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Ratan",
    role: "Programmer",
    company: "Google",
}

// for in loop
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// for of loop
for (const iterator of "Ratan") {
    console.log(iterator);
}

// while loop
let i = 5;
while(i < 8){
    console.log(`Value of I is ${i}`);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(i)
    i++;
} while (i < 7);