const express = require("express");
const route = express.Router();
const authenticateToken = require('../utils/authToken');


//Add budget
//Api prefix /api/budget
route.post('/', authenticateToken, async (req, res)=>{
    const {category, amount} = req.body;

    if(!category || !amount){
        res.status(400).json({message: "please provide all required fields category and amount"})
    }
    try {
        const user = req.user
        if(!user){
            return res.status(401).json({message: "Unathorized: User not found"})
        }
        
        const userBudget = user.Budget
        for(let i =0; i < userBudget.length; i++){
            if (userBudget[i].category === category){
                return res.status(401).json({message: `Default budget for ${category} exist please update the budget instead`})
            }
        }
        const newBudget = {category, amount};
        user.Budget.push(newBudget);
        await user.save()
        return res.status(201).json({message: "Budget added successfully"})
    } catch (err) {
        console.log(`Error adding new budget ${err}`);
        return res.status(500).json({message: "Internal server error"})
    }
    
})

module.exports = route;