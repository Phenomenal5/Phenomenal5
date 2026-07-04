import User from "../models/User.js";
import bcrypt from "bcrypt"
import validator from "validator"


// Adim routes

// Get all users

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get user by ID
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({message : "User not found"})

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal server error" });
    }
}


// General profile route
export const getProfile = async (req, res) => {
    const userId = req.user.id
    try {
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({message: "User not found"})
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}


// update profile
export const updataProfile = async (req, res) => {
    const {name, email} = req.body;
    const userId = req.user.id
    // const file = req.file;

    try {
        const user = await User.findById(userId)

        if(email) {
            if(!validator.isEmail(email)) return res.status(400).json({message: "Invalid Email"})
        }

        if(!user) return res.status(404).json({message: "User not found"})

        if(req.file) {
            user.photo = `/uploads/profile/${req.file.filename}`
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save()
        res.status(200).json({message: "profile updated", user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}


// update password
export const updatePassword = async (req, res) => {
    const {currentPassword, newPassword} = req.body;
    const userId = req.user.id;

    if(!currentPassword || !newPassword) return res.status(400).json({message: "Missing fields"})
        try {
            const user = await User.findById(userId).select("password")
            if (!user) return res.status(400).json({message: "User not found"})

            if(!validator.isLength(newPassword, { min: 8 })) return res.status(400).json({message: "Minimum of 8 characters"})

            const match = await bcrypt.compare(currentPassword, user.password)

            if(!match) return res.status(401).json({message: "Current password incorrect"})
            
            const hashPassword = await bcrypt.hash(newPassword, 10)
            user.password = hashPassword

            await user.save()
            res.json({message: "Password updated"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"})
        }
}
