const express = require('express')
const router = express.Router()
const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/', (req, res)=>{
    res.send({message: 'you hit the api route'}).json()
})


//login route

router.post('/login', async (req, res)=>{
    const { email, password} = req.body
    const user = await userModel.findOne({email})
    if (!user){
        res.status(401).json({message: "User not found"})
    } else{
        bcrypt.compare(password, user.password, (err, result)=>{
            if (err){
                console.log(`Error matching password ${err}`)
            }

            if(result){
                const token = jwt.sign({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    Expenses: user.Expenses
                }, process.env.SECRETE)
                res.json({status: "ok", user: token})
            }
        })
    }
})


//Sign up route
//prefix- /api
router.post('/signup',  (req, res)=>{
    const {firstName, lastName, email, password}  = req.body;
    if (!firstName || !lastName || !email || !password){
        //res.send({message: "Include firstName, lastName, email & password in the body"})
        console.log('Signup route no params')
        res.status(401).json({message: "Cant Sign up user. Include firstName, lastName, email & password in the request body"})
    } else{
      
        const SALT = parseInt(process.env.SALT)
        bcrypt.hash(password, SALT, (err, newPassword)=>{
            try{
                const newUser = new userModel({
                    firstName,
                    lastName,
                    email,
                    password: newPassword,
                })
                newUser.save()
                res.status(200).json({message: "User created successfully"})
            } catch(err){
                console.log(`Error creating user, duplicate email: ${err}`)
            }
           
        })

        
    }
    
})

module.exports = router