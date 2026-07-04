import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5001;


//  Connect to MongoDb
connectDB()





app.use("/api/users", userRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});