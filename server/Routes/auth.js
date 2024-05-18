const express = require('express')
const router = express.Router()
const userModel = require('../models/user')

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
        res.sendStatus(401)
    } else{
        console.log({
            firstName,
            lastName,
            email,
            password
        });
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password
        })
        newUser.save()
        res.sendStatus(200)
    }
    
})

module.exports = router