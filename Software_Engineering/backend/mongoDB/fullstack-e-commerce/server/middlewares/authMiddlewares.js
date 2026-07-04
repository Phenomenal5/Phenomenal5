import jwt from "jsonwebtoken"
import user from "../models/user.js"


export const protect = async (req, res, next) => {
    let token;

    // token from headers
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token) return res.status(401).json({message: "Not authorized: Token missing"})

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // attach user to request

            req.user = {id: decoded.id, role: decoded.role}

            // check that the user still exisits and not blocked

            const existingUser = await User.findById(decoded.id)
            if (!existingUser) return res.status(401).json({message: "Not Authorized, user not found"})
            if (existingUser.isBlocked) return res.status(401).json({message: "user blocked, contact support"})

            next()
        } catch (error) {
            return res.status(401).json({message: "Not authorized, token invalid"})
        }
}