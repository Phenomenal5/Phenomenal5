import mongoose from "mongoose";





export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL)    // Connection to mongodb
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log("MongoDB connection error" , error)
    }




}