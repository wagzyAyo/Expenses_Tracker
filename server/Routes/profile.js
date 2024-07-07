const express = require("express");
const route = express.Router();
const authenticateToken = require("../utils/authToken")
const bcrypt = require("bcryptjs");
const userModel = require("../models/user")


//update profile
//prefix  api/updateprofile
route.put('/', authenticateToken, async (req, res)=>{
    
    const {firstName, lastName, email, password} = req.body;
    const user = await userModel.findOne({email})
    

   
    if (!firstName || !lastName || !email || !password){
        return res.status(400).json({message: "Error updating profile firstName, lastName, email & password fields are required"})
    }

    if (!user || !user.password) {
        return res.status(500).json({ message: "User data not found or incomplete" });
    }

    

    try {
        const comparedPass = await bcrypt.compare(password, user.password)

        if (!comparedPass){
            return res.status(400).json({message: "Password does not match"})
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        await user.save()
        return res.status(200).json({message: "Profile updated successfully"})
    } catch (err) {
        console.error("Error updating profile:", err);
        return res.status(500).json({message: "Internal server error"})
    }
   


});

route.put('/password', authenticateToken, async (req, res)=>{
    const {email, oldPassword, newPassword} = req.body;
    const user = await userModel.findOne({email})

    if (!email || !oldPassword || !newPassword){
        res.status(400).json({message: "email, old password and new password fields are required"});
    }

    try {
        const userPass = await bcrypt.compare(oldPassword, user.password);
        const SALT = parseInt(process.env.SALT)
        if(!user){
            return res.status(400).json({message: "No user found with this email"})
        }
        if(!userPass){
            return res.status(401).json({message: "Password does not match"})
        }
        user.password = await bcrypt.hash(newPassword, SALT);
        await user.save();
        return res.status(200).json({message: "Password updated"});

    } catch (err) {
        console.log(`Error updating user password ${err}`);
        return res.status(500).json({message: "Internal server error"})
    }
})

module.exports = route