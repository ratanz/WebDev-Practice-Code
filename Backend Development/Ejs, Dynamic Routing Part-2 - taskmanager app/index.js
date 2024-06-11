const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// filename function
app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.error('Error reading files directory:', err);
            return res.status(500).send('Server Error');
        }
        const displayFiles = files.map(file => path.parse(file).name);
        res.render("index", { files: displayFiles });
    });
});

app.get('/file/:filename', function (req, res) {
    const filename = req.params.filename + '.txt';
    console.log('Attempting to read file:', filename);
    fs.readFile(`./files/${filename}`, "utf-8", function (err, filedata) {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Server Error');
        }
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
});

// edit function
app.get('/edit/:filename', function (req, res) {
    res.render('edit', { filename: req.params.filename })
});

app.post('/edit', function (req, res) {
    const previous = `./files/${req.body.previous.trim()}.txt`;
    const newFile = `./files/${req.body.new.trim()}.txt`;

    fs.rename(previous, newFile, function (err) {
        if (err) {
            console.error('Error renaming file:', err);
            return res.status(500).send('Server Error');
        }
        res.redirect("/");
    });
});

// saving files into the files folder
app.post('/create', function (req, res) {
    const filename = req.body.title + '.txt';
    fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).send('Server Error');
        }
        res.redirect("/");
    });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
