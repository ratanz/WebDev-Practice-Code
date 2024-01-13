
// Select the database to use.
use('AceuDatabase');

// Insert a few documents into the codebase collection.
db.getCollection('sales').insertMany([
    {
        "name": "Python",
        "price": "15000",
        "guide": "Guido"
    },
    {
        "name": "JavaScript",
        "price": "18000",
        "guide": "Brendan"
    },
    {
        "name": "C++",
        "price": "22000",
        "guide": "Bjarne"
    },
    {
        "name": "Java",
        "price": "20000",
        "guide": "Ratan"
    },
    {
        "name": "Ruby",
        "price": "16000",
        "guide": "Matz"
    },
    {
        "name": "Swift",
        "price": "25000",
        "guide": "Chris"
    }
]
);


// Print a message to the output window.
console.log(`Done inserting data`);
