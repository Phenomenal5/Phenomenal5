import prisma from "../utils/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // hash password
        const hashPassword = await bcrypt.hash(password, 10)

        // save / create a new user
        const user = await prisma.user.create({
            data: { name, email, password: hashPassword }
        })

        res.status(201).json({message: "User created successfully", user})
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        if(!email || !password) return res.status(404).json({message: "Field are required"});

        //  If user exist or not
        const user = await prisma.user.findUnique({where: {email}})
        if(!user) return res.status(404).json({message: "user not found"})

        // compare password
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) res.status(401).json({message: "Invalid credentials"})

        const token = jwt.sign({userId : user.id}, process.env.JWT_SECRET)
        res.json({token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
}