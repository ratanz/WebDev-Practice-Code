let userName = "BroCode";

console.log(userName.charAt(2));

console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));

console.log(userName.length);

userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

console.log(userName);

let result = userName.startsWith(" ");
let resultEnd = userName.endsWith(" ");

if (result) {
  console.log("Your username can't begin with' ' ");
} else {
  console.log(userName);
}

console.log(result);

let resultInclude = userName.includes(" ");

if (result) {
  console.log("Your username can't include ' ' ");
} else {
  console.log(userName);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - -

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replace("-", "");

phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);
