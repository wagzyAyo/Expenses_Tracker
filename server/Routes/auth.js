const express = require('express')
const router = express.Router()
const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

router.get('/', (req, res)=>{
    res.send({message: 'you hit the api route'}).json()
})
//Sign up route
//prefix- /api
router.post('/signup', (req, res)=>{
    const {firstName, lastName, email, password}  = req.body;
    if (!firstName || !lastName || !email || !password){
        //res.send({message: "Include firstName, lastName, email & password in the body"})
        console.log('Signup route no params')
        res.status(401).json({message: "Cant Sign up user. Include firstName, lastName, email & password in the request body"})
    } else{
        // console.log({
        //     firstName,
        //     lastName,
        //     email,
        //     password
        // });
        const SALT = parseInt(process.env.SALT)
        bcrypt.hash(password, SALT, (err, newPassword)=>{
            try{
                const newUser = new userModel({
                    firstName,
                    lastName,
                    email,
                    password: newPassword
                })
                newUser.save()
                res.status(200).json({message: "User created successfully"})
            } catch(err){
                console.log(`Error creating user ${err}`)
            }
           
        })

        
    }
    
})

module.exports = router