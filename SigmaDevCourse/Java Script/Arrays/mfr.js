// map

let arr = [3, 6, 34, 64, 43]
// let newArr = []

// for(let index = 0; index < arr.length; index++){
//     const element = arr[index]
//     newArr.push(element**2)
// }

let newArr = arr.map((e) => {
    return e ** 2
})

// filter

console.log(newArr)
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))


// reduce

let arr3 = [1, 2, 4, 5, 6, 7]

const red = (a, b) => {
    return a + b
}
console.log(arr3.reduce(red))