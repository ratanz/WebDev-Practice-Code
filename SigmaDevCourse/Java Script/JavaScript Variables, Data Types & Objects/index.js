let a = 5;
let b = 6;
let c = "Aceu";

console.log(a + b);
// 5 + 6 = 11
console.log(typeof a, typeof b, typeof c);
// number, number, string
console.log(a - b);
{
  let a = 77; // this is block level variable
  console.log(a);
}
console.log(a);

const a1 = 8;
a1 = a1 + 1; // value cannot be changed in const

let x = "Ratan Pro";
let y = 22;
let z = 2.77;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
  name: "Aceu",
  "job code": 77,
};

console.log(o);
o.salary = "100cr";
console.log(o);
o.salary = "500cr";
console.log(o);
