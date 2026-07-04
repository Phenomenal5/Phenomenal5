import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    photo : String,
    password : {
        type : String,
        required : true,
        select : false  // prevent default responses from sending the password
    },
    age : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
},{
    timestamps : true
})



// Mongoose.model(): creates a model we can use to interact with the collection

const User = mongoose.model("User", userSchema)

export default User