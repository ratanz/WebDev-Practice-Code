let a = [2, 6, 55, 44, 98]

// for(let index = 0; index < a.length; index++){
//     const element = a[index]
//     console.log[element]
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })


// for in loop
let obj = {
    a: 1,
    b: 3,
    c: 7
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]
        console.log(obj)
    }
}


// for of loop
for (const iterator of a) {
    console.log(iterator)
}

