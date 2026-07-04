import User from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";
import validator from "validator"



export const signUp = async ( req, res ) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email address" });

    if (!validator.isStrongPassword(password))
      return res
        .status(400)
        .json({
          message:
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one symbol",
        });

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const exisitingUser = await User.findOne({ email });

    if (exisitingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
};





export const logIn = async ( req, res ) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email address" });

    if (!password)
      return res.status(400).json({ message: "Password is required" });

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    if (user.isBlocked)
      return res.status(403).json({ message: "Your account has been blocked" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = generateToken({id: user._id, role: user.role})

    return res.status(200).json({ message: "Login successful", user: {id: user._id, name: user.name, email: user.email, role: user.role}, token });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
};
