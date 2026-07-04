import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "Invalid email address"]
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);


// hash password
userSchema.pre("save" , async function () {
    if(!this.isModified("password")) return ;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})


// compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log(enteredPassword)
  console.log(this.password)
    return await bcrypt.compare(enteredPassword, this.password);
  }

export default mongoose.model("User", userSchema);