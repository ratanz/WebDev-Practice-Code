const express = require('express')
const app = express()

// converts into readable data -
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello Worlddd')
})

app.get('/about', function (req, res) {
    res.send('page made using exprss route')
})


app.listen(3000)
