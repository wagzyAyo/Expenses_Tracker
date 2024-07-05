const express = require("express");
const route = express.Router();
const authenticateToken = require('../utils/authToken');


//Add budget
route.post('/', authenticateToken, async (req, res)=>{
    const {category, amount} = req.body;

    if(!category || !amount){
        res.status(400).json({message: "please provide all required fields category and amount"})
    }
    try {
        const user = req.user
        if(!user){
            res.status(401).json({message: "Unathorized: User not found"})
        }
        const newBudget = {category, amount};
        user.Budget.push(newBudget);
        await user.save()
        res.status(201).json({message: "Budget added successfully"})
    } catch (err) {
        console.log(`Error adding new budget ${err}`);
        res.status(500).json({message: "Internal server error"})
    }
    
})