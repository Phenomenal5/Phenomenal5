require("dotenv").config() // load variable from .env file


// Start and run the server

const http = require('http')
const os = require('os')
const fs = require('fs')
const ejs = require('ejs')


const port = process.env.PORT

const server = http.createServer((req , res) => {

    console.log(req)
    // if (req.url === '/') {
    //     res.writeHead(404, {"content-type" : "text/plain"})
    //     res.end("Home Page")
    //     return
    // }

    if (req.url === '/'){
        // load template (ejs file)
        fs.readFile("views/index.ejs" , "utf-8" , (err , template)=>{
            if(err){
                res.writeHead(500, {"content-type" : "text/plain"})
                res.end("Home Page")
            }
        })
    }
    res.writeHead(200 , {"content-type"})






})

server.listen(port ,() => {
    console.log(`server is running on port ${port}`)
} )