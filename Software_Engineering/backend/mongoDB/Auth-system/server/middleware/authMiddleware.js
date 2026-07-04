import jwt from "jsonwebtoken"
import User from "../models/User.js"






export const protect = async (req , res , next) => {
    let token;


    // token will be sent in the header of the request
    // token from headers : Authorization : Bearer <token>
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(' ')[1]
    }


    if (!token) return res.status(401).json({message: "Not authorized, token missing"})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // attach user to request
        req.user = {id : decoded.id, role : decoded.role}

        // Fetch user to ensure user still exists
        const exisitingUser = await User.findById(decoded.id)
        if(!exisitingUser) return res.status(401).json({message: "Not authorized, User not found"})



        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: "Not authorized, token invalid"})
    }

}