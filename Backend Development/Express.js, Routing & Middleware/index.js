// Express js Framework :

// Introduction to Express.js -
// Express js is npm package 
// it is a framework 
// Framework ->
// express js manages everything from receiving the request and giving the response

// Setting up a basic Express aplication -
// Routing :
// Request and response handling :
// Middleware :

const express = require('express')
const app = express()

// middleware req
app.use(function (req, res, next) {
    console.log('Request made : ', req.method, req.path)
    next();
});

// another middleware
app.use(function (req, res, next) {
    console.log('Request made once again : ', req.method, req.path)
    next();
});

app.get('/', function (req, res) {
    res.send('Hello Worlddd')
})

app.get('/about', function (req, res) {
    res.send('page made using exprss route')
})

app.get('/profile', function (req, res, next) {
    // return next(new Error("something went wrong"))
    res.send('Welcome to the profile')
})

app.listen(3000)


// Error handling.

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})




