const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.error('Error reading files directory:', err);
            return res.status(500).send('Server Error');
        }
        // Remove the .txt extension from filenames for display
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
        console.log(`File Data for ${filename}:`, filedata);  // Log the file data to ensure it's read correctly
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
});

app.post('/create', function (req, res) {
    const filename = req.body.title + '.txt';
    console.log('Attempting to write file:', filename, 'with data:', req.body.details);
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
