// FS MODULE (File System)

const fs = require("fs")

fs.writeFileSync('message.txt' , "Hello Node js File System !")



const data = fs.readFileSync('message.txt' , 'utf-8')
console.log(data)