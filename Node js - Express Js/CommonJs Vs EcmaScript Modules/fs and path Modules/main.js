const fs = require("fs")
// const fs = require("fs/promises")

console.log(fs)

console.log("starting")
// fs.writeFileSync("aceu.txt", "aceu is a good coder")

fs.writeFile("aceu2.txt", "aceu is a good coder too", ()=>{
    console.log("Done")
    fs.readFile("aceu2.txt", (error, data) =>{
        console.log(error, data.toString())
    })
})

fs.appendFile("aceu.txt", "aceuPro", (e, d) =>{
    console.log(d)
})

console.log("ending")