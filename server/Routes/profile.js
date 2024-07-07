const express = require("express");
const route = express.Router();
const authenticateToken = require("../utils/authToken")
const bcrypt = require("bcryptjs")


//update profile
//prefix  api/updateprofile
route.put('/', authenticateToken, async (req, res)=>{
    const user = req.user;
    const {firstName, lastName, email, password} = req.body;
    

   
    if (!firstName || !lastName || !email || !password){
        return res.status(400).json({message: "Error updating profile firstName, lastName, email & password fields are required"})
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
        return res.status(500).json({message: "Internal server error"})
    }
   


})

module.exports = route