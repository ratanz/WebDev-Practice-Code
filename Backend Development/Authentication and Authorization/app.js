const cookieParser = require('cookie-parser'); // Middleware to parse cookies
const express = require('express'); // Express framework
const app = express(); // Create an Express application
const bcrypt = require('bcrypt'); // Library for hashing passwords
const jwt = require('jsonwebtoken'); // Library for creating and verifying JSON Web Tokens

app.use(cookieParser()); // Use cookie-parser middleware

// Route to create a JWT token
app.get("/", function (req, res) {
    let token = jwt.sign({ email: "ratan@gmail.com" }, "secret"); // Create a JWT token with a payload and a secret key
    res.cookie("token", token); // Set the token in a cookie
    res.send("token sent");
});

// Route to verify and read a JWT token from cookies
app.get("/token", function (req, res) {
    console.log(req.cookies.token); // Log the token from cookies
    let data = jwt.verify(req.cookies.token, "secret"); // Verify the token using the secret key
    console.log(data); // Log the decoded data
    res.send("token verified");
});

// Route to encrypt a password
app.get("/encrypt", function (req, res) {
    bcrypt.genSalt(10, function (err, salt) { // Generate a salt with 10 rounds
        bcrypt.hash("pass", salt, function (err, hash) { // Hash the password "yoyo" with the generated salt
            console.log(hash); // Log the hashed password
            res.send("password encrypted");
        });
    });
});

// Route to check or compare a password
app.get("/compare", function (req, res) {
    bcrypt.compare("pass", "$2b$10$GT7b4f4FqpR/li7wroE7DOaYiOizTpqJV2HDbq9SNmGoPwEZrHbQC", function (err, result) {
        console.log(result); // Log the result of the comparison
        res.send("password comparison result: " + result);
    });
});

// Route to read cookies
app.get("/read", function (req, res) {
    res.send("read page"); // Send a response to the client
});

app.listen(3000); // Start the server on port 3000
