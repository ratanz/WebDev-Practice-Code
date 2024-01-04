// date (year, month , day, hour, second, ms)
// const date = new Date(2024, 0, 4, 12, 4, 5);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth(); 
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(`the year is ${year}`);
// console.log(`the month is ${month}`)
// console.log(`the day is ${date}`)
// console.log(`the hour is ${hour}`)
// console.log(`the minutes are ${minutes}`)

// - - - - - - - - - -

// setting the date -

// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setSeconds(4);

// console.log(date)

// comparing the dates -

const date1 = new Date("2023-12-27");
const date2 = new Date("2024-1-4");

if(date2 > date1){
    console.log("Happy new Year");
}
else{
    console.log("Keep waiting")
}

