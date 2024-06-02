const fs = require('fs');

// Writefile
// fs.writeFile("hey.txt", "hey hello how are you?", function (err) {
//     if (err) return console.log(err);
//     else console.log("The file was saved!");
// })

// appendfile

// fs.appendFile("hey.txt", " i am good ", function (err) {
//     if (err) return console.log(err);
//     else console.log("The file was appended!");
// })

//copyFile

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) return console.log(err);
//     else console.log("hello.txt was copied to copy/copy.txt");
// })

// rename

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) return console.log(err);
//     else console.log("hey.txt was renamed to hello.txt");
// })

// unlink

// fs.unlink("hello2.txt", function(err){
//     if(err) return console.log(err);
//     else console.log("hello2.txt was deleted");
// })

// rmdir
// fs.rm("./empty", { recursive: true }, function (err) {
//     if (err) return console.log(err);
//     else console.log("empty was deleted");
// })

// readFile 
// fs.readFile("./copy/copy.txt", "utf8", function (err, data) {
//     if (err) return console.log(err);
//     else console.log(data);
// })