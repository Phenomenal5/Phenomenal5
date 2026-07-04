import express from "express"
import cors from "cors"
import "dotenv/config"


const app = express()


app.use(cors()) // Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()) // Middleware to parse JSON request bodies

const port = process.env.PORT || 3000



app.listen( port, () => {
    console.log(`Server is running on port ${port}`)
})