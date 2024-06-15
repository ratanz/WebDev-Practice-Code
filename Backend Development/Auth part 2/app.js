const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');

const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt,) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email }, "secret")
            res.cookie("token", token)

            res.send(createdUser)
        })
    })

});

app.get("/login", function (req, res) {
    res.render('login')
})

app.post("/login", async function (req, res) {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        res.send("Something went wrong!");
        return;
    }
    
    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: user.email }, "secret");
            res.cookie("token", token);
            res.render('success'); // Render the success page
        } else {
            res.send("Something went wrong!");
        }
    });
});

app.get("/logout", function (req, res) {
    res.clearCookie("token", "");
    res.redirect('/');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
