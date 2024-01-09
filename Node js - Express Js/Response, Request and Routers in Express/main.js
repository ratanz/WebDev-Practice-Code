const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("its a get request");
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("its a post request");
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("its put request");
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("its a index");
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 3, c: 5, d: 7, name: ["aceu"] })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})