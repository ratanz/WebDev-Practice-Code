const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey")
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "ratan",
        email: "kiara@gmail.com",
        username: "ratanz"
    })

    res.send(createduser)
})

app.get("/read", async (req, res) => {
    let users =  await userModel.find() // gives an array
 //    let users =  await userModel.findOne({username :"ratannz"}) //gives an object
    res.send(users)
 })
 
app.get('/update', async (req, res) => {

    let updateduser = await userModel.findOneAndUpdate({ username: "ratannz" }, { name: "aceu" }, { new: true })

    res.send(updateduser)
})

app.get("/delete", async (req, res) => {
   let users =  await userModel.findOneAndDelete({username : "ratannz"}) 
   res.send(users)
})


app.listen(3000);