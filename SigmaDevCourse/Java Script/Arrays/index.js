let arr = [1, 3, 5, 6, 7];

console.log(arr);
// console.log(arr.length)
// console.log(typeof arr)
// arr[0] = 777; // to change element in array

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// console.log(arr.toString())
// console.log(arr.join(" and "))

arr.push(342);
// arr.pop()

arr.shift("yo"); // brother of pop
arr.unshift("wassup"); // brother of push

// delete arr[4]

// console.log(arr)

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

a1.concat(a2, a3);
console.log(a1);

let numbers = [22, 33, 44, 66, 77];
numbers.splice(1, 2);
console.log(numbers);
