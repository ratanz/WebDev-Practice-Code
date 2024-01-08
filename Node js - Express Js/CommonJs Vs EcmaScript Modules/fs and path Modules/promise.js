import { log } from "console"
import { cpSync } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("aceu.txt")

let b = await fs.appendFile("aceu.txt", "he is amazing coder ")

console.log(a.toString());