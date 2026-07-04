import User from "../models/User.js";
import validator from "validator";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";





// create new user

export const signUp = async (req, res) => {
    const { name , email , password, age} = req.body;

    try {
        // Handle validation
        if(!name || !email) return res.status(400).json({message: "All fields are required"})
        
        if(!validator.isEmail(email)) return res.status(400).json({message: "Invalid Email"})

        if(!validator.isLength(password, { min: 8 })) return res.status(400).json({message: "Minimum of 8 characters"})

        // hash password
        // check if user exist
        const existUser = await User.findOne({email})
        if(existUser) return res.status(400).json({message: "Bad Credentials !"})
            
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name , email , age, password: hashPassword})
        res.status(201).json({message: "Account Created Successfully", user})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if(!email || !password) return res.status(400).json({message: "All field are required"})

            // validation
        if(!validator.isEmail(email)) return res.status(400).json({message: "Invalid Email"})

        if(!validator.isLength(password, { min: 8 })) return res.status(400).json({message: "Minimum of 8 characters"})

        const user = await User.findOne({email}).select("+password") // include password since select : false
        if(!user) return res.status(401).json({message: "Invalid credencials"})

        
        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch) return res.status(401).json({message: "Invalid credentials"})

        const token = generateToken({id: user._id, role: user.role, })
        
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            photo: user.photo,
            token
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}