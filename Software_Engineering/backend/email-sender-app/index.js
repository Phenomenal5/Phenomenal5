require("dotenv").config()

const generator = require('generate-password')
const nodemailer = require('nodemailer')

const http = require('http')

const port = process.env.PORT

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})


const server = http.createServer((req , res)=>{
    if(req.url === '/generate-password'){
        // Step 1 : Generate password
        const password = generator.generate({
            length : 20,
            numbers : true,
            symbols : true,
            uppercase : true,
            lowercase : true,
            strict : true
        })

        const mailOptions = {
            from : process.env.EMAIL,
            to : process.env.RECEIVER_EMAIL,
            subject : "Generated Password",
            text : `Your generated password is : ${password}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                res.writeHead(500, {"content-type" : "application/json"})
                res.end({message: "error sending mail", error})
            }else{
                res.writeHead(200, {"content-type" : "application/json"})
                res.end({message: "password sent to email", password})
            }
        })

        // res.end(password)
    }else{
        res.writeHead(404 , {"content-type" : "text/plain"})
        res.end("page not found")
    }
})

server.listen(port,() => {
    console.log(`server is running on port ${port}`)
} )