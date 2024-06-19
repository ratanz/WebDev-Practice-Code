const express = require('express');
const mongoose = require('mongoose');
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const user = require('./models/user');
const crypto = require("crypto")
const path = require("path")
const upload = require('./config/multerconfig');

const app = express();

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Render the profile page, only if the user is logged in
app.get('/profile', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate("posts")
    console.log(user)
    res.render('profile', { user });
});

app.get('/profile/upload', (req, res) => {
    res.render('profileupload');
});

// profile picture upload
app.post('/upload', isLoggedIn, upload.single("image"), async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    user.profilepic = req.file.filename
    await user.save()
    res.redirect("/profile")
});


// like/unlike functionality
app.get('/like/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")

    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid)
    }
    else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1)

    }

    await post.save()
    res.redirect('/profile');
});

// Render the edit post page
app.get('/edit/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")

    res.render("edit", { post })
});

// post update
app.post('/update/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOneAndUpdate({ _id: req.params.id }, { content: req.body.content })
    res.redirect("/profile")
});

// new post creation
app.post('/post', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    let { content } = req.body

    let post = await postModel.create({
        user: user._id,
        content: content
    })
    user.posts.push(post._id)
    await user.save()
    res.redirect("/profile")
});

// Handle user registration
app.post('/register', async (req, res) => {
    let { email, password, username, name, age } = req.body
    let user = await userModel.findOne({ email })
    if (user) return res.status(500).send("User already exits")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                name,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email: email, userid: user._id }, "shhhh")
            res.cookie("token", token)
            res.send("User created successfully")
        })
    })

});

// Handle user login
app.post('/login', async (req, res) => {

    let { email, password } = req.body

    let user = await userModel.findOne({ email })
    if (!user) return res.status(500).send("Something went wrong")

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "shhhh")
            res.cookie("token", token)
            res.status(200).redirect("/profile")
        }
        else {
            res.redirect("/login")
        }
    });
});

// Handle user logout
app.get('/logout', (req, res) => {
    res.clearCookie("token", "")
    res.redirect('/login');
});

// Middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/login");
    }

    try {
        const data = jwt.verify(token, "shhhh");
        req.user = data;
        next();
    } catch (err) {
        res.redirect("/login");
    }
}

// Start the server on port 3000
app.listen(3000);