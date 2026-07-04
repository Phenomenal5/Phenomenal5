import express from "express"
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
import 'dotenv/config'
import cors from "cors"
import path from "path"
import { seedAdmin } from "./initAdmin.js";


const app = express();
const PORT = process.env.PORT || 3000;


// middleware to parse json data
app.use(express.json())
app.use(cors())
app.use(express.static("public")) // serve uploaded files

// connect database
connectDB()

// Routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
