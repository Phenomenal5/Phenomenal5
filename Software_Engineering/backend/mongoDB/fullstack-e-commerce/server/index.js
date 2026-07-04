import express from "express";
import "dotenv/config"
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"



const app = express()
const port = process.env.PORT


// middleware to parse json
app.use(express.json())

// connect database
connectDB()

// morgan logger
app.use(morgan("dev"))

// routes
app.use("/api/auth", authRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/product", productRoutes)




app.listen(port, ()=> {
    console.log(`server running on port : ${port}`);
})