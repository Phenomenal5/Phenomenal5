require("dotenv").config()

const express = require("express")
const app = express()


const port = process.env.PORT


app.get("/", (req, res) => {
    res.json("Welcome to our API")
})


app.listen(port , () => {
    console.log(`server running on port: ${port}`)
})