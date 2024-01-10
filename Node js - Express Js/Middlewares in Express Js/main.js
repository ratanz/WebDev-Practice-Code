const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

// app.use(express.static("public"))


app.use('/blog', blog)

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.aceu = "i am aceu"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log('m1')
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("sent by m1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.aceu = "I am ratan"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about !' + req.aceu)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})