const express = require('express')
const router = express.Router()
const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const token = require('../utils/genToken')

router.get('/', (req, res)=>{
    res.send({message: 'you hit the api route'}).json()
})


//login route
//prefix /api
router.post('/login', async (req, res)=>{
    const { email, password} = req.body

    try{
        const user = await userModel.findOne({email})
    if (!user){
        res.status(401).json({message: "No user found with the email"})
    } else{
        bcrypt.compare(password, user.password, (err, result)=>{
            if (err){
                console.log(`Error matching password ${err}`)
            }
           
            if(result){
                token(res, user._id)
                res.status(201).json({
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    Expenses: user.Expenses
                });
            }else{
                res.status(401).json({message: "Invalid email or password"})
            }
        })
    }
    } catch(err){
        console.log(`Error during logging: ${err}`)
        res.status(501).json({message: 'Internal server error'})
    }
    
})


//Sign up route
//prefix- /api
router.post('/signup', async (req, res)=>{
    const {firstName, lastName, email, password}  = req.body;
    if (!firstName || !lastName || !email || !password){
        //res.send({message: "Include firstName, lastName, email & password in the body"})
        console.log('Signup route no params')
        res.status(401).json({message: "Cant Sign up user. Include firstName, lastName, email & password in the request body"})
    } else{
            try{
                const SALT = parseInt(process.env.SALT)
                const newPassword = await bcrypt.hash(password, SALT)
                const newUser = new userModel({
                    firstName,
                    lastName,
                    email,
                    password: newPassword,
                })
                await newUser.save()
                token(res, newUser._id)
                
                const user =  await userModel.findOne({email})
                res.status(200).json({ 
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    Expenses: user.Expenses})
            } catch(err){
                console.log(`Error creating user, duplicate email: ${err}`)
                res.status(401).json({message: 'Error creating user, duplicate email'})
            }
        }
    
});

router.post('/logout', (req, res)=>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({message: 'User logged out'})

})

module.exports = router