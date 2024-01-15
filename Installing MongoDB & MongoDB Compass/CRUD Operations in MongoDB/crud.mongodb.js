// CRUD Operation
use("CrudDb")

// Create
db.createCollection("courses")

db.courses.insertOne({
    name: "Ratan's web dev free course",
    price: 0,
    assignments: 12,
    projects: 45,
})

db.courses.insertMany(
    [
        {
            "name": "Web Development Basics",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Advanced Web Design Course",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Front-end Development Workshop",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Full Stack Web Development",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Responsive Web Design Masterclass",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "JavaScript Fundamentals",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Node.js and Express Crash Course",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "React.js Essentials",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Vue.js for Beginners",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Building APIs with Django",
            "price": 0,
            "assignments": 12,
            "projects": 45
        }
    ]

)

// Read
// let a = db.courses.find({price: 0})

// console.log(a.toArray())

let b = db.courses.findOne({price: 0})

console.log(b)

// Update
db.courses.updateOne({price : 0},
{$set :{price : 100}})

db.courses.updateMany({price : 0},
    {$set :{price : 1000}})


// Delete

db.courses.deleteOne({price:  100})

// db.courses.deleteMany({price:  1000})

