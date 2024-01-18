const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr, res) => {
    let rno = Math.random() * (arr.length - 1)
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({})
    // Generate Random Data
    let randomNames = ["Rohan", "Soham", "Ratan", "Virat"]
    let randomLang = ["Python", "Java", "js", "C++"]
    let randomCities = ["Pune", "Mumbai", "New York", "Kolkata"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 25000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        });

    }

    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})