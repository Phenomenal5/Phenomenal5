require("dotenv").config() // require is the same as import

// HTTP Module ( create a server )  // used to create server

const http = require("http") // import http from "http"

const port = process.env.PORT



const server = http.createServer((req, res) => {
    res.writeHead(200 , {"content-type" : "text/plain"})
    res.end
})