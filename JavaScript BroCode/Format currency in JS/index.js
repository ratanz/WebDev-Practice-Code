// .toLocaleString() = returns a string with a language 
// sensitive representation of a number
// .toLocaleString("locale", {options});

let number = 123456.789;

// number = number.toLocaleString("en-US");
// number = number.toLocaleString("hi-IN");
// number = number.toLocaleString9("de-DE");

// number = number.toLocaleString("en-US" , {style : "currency", currency :"USD"});
number = number.toLocaleString("hi-IN" , {style: "currency", currency : "INR"});


console.log(number)