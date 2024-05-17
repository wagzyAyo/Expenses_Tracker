const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.send({message: 'you hit the api route'}).json()
})
//Sign up route
//prefix- /api
router.post('/signup', (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.signup

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
        })
        res.sendStatus(200)
    }
    
})

module.exports = router