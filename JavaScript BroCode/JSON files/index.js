// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

const jsonPerson = `{
    "name": "Spongebob",
    "Age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`;

const jsonPeople = `[{
    "name": "Spongebob",
    "Age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "Age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "Age": 20,
    "isEmployed": true
},
{
    "name": "Sandy",
    "Age": 32,
    "isEmployed": true
}
]`;

// const parsedData = JSON.parse(jsonPeople)
// console.log(parsedData)

// const jsonString = JSON.stringify(names);
// console.log(jsonString); // Outputs: ["Spongebob","Patrick","Squidward","Sandy"]

// const jsonStringPerson = JSON.stringify(person);
// console.log(jsonStringPerson);

// const jsonStringPeople = JSON.stringify(person);
// console.log(jsonStringPeople)

// - - - - - - - - - - - - 

fetch("people.json")
   .then(response => response.json())
   .then(values => values.forEach(value => console.log(value.name)))
   .catch(error => console.error(error));

