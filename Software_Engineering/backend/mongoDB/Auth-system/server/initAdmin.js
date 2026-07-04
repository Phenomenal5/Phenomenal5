import User from "./models/User.js";
import bcrypt from "bcrypt"




export const seedAdmin = async () => {
    try {
        const adminExist = await User.findOne({role: "admin"})
        if (adminExist){
            console.log('Admin Exist !')
            process.exit()
        }

        const hashPassword = await bcrypt.hash("adminPassword123#", 10)

        const adminUser = await User.create({name : 'Master', email : 'jimbaabdullahi01@gmail.com', password : hashPassword, role: 'admin'})

        console.log(adminUser)

    } catch (error) {
        console.log(error)
    }
}