// Fundamentals of JS :
// arrays and objects
// functions return
// async js coding
// foreach map, filter, find, indexOf

// Arrays -

// let arr = [1, 2, 3, 4, "hey", {}, true, function () { }, []]; // these types of value we can hold in an array in js.
// let obj = { name: "John", age: 30 };

let arr = [1, 2, 3, 4, 5]

// for each -
// arr.forEach(function (val) {
//     console.log(val + " hello");
// })

// map -
let newarr = arr.map(function (val) {
    // return 17;
    return val * 3;
})
console.log(newarr)

// filter -
// let ans = arr.filter(function (val) {
//     if (val > 3) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(ans)

//find -
let ans = arr.find(function (val) {
    if (val === 2) return val;
})

// console.log(ans)

//indexOf -
let find = arr.indexOf(2) // if -1 it means value does not exists in array.
// console.log(find)

// objects -

{
    let obj = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            country: "USA"
        }
    }
    // obj.freeze(obj)  // with this value can't be changed in object
    // obj.age = 20;
    // console.log(obj)
}

// return function -
function abcd() {
    return "hello world";
}

var ans2 = abcd();
console.log(ans2)

// async js -
// async function fun (){
//     var blob = await fetch('https://randomuser.me/api/')
//     var ans = await blob.json()
//     console.log(ans)
// }

// fun();