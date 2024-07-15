const express = require("express");
const route = express.Router();
const authenticateToken = require('../utils/authToken');
const mongoose = require("mongoose")


//Add budget
//Api prefix /api/budget
route.post('/', authenticateToken, async (req, res)=>{
    console.log("receiving data", req.body)
    let {category, amount} = req.body;

    if(!category || !amount){
        return res.status(400).json({message: "please provide all required fields category and amount"})
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
        return res.status(200).json({message: "Budget added successfully"})
    } catch (err) {
        console.log(`Error adding new budget ${err}`);
        return res.status(500).json({message: "Internal server error"})
    }
    
});

//api prefix api/budget/id/update
route.put('/:id/update', authenticateToken, async(req, res)=>{
    const user = req.user
    const {id} = req.params;
    const {category, amount} = req.body;

    if(!category || !amount){
        return res.status(401).json({message: "please provide all required fields category and amount"})
    }
     try {
        const userBudget = user.Budget
        let budgetFound = false;
        userBudget.forEach(budget => {
            if(budget._id.toString() === id){
                budget.category = category;
                budget.amount = amount;
                budgetFound = true
            }
            
        });
        if(budgetFound){
            await user.save()
            return res.status(201).json({message: "Budget updated suuccessfully"})
        }
     } catch (err) {
        console.log(`Error updating budget ${err}`)
        return res.status(500).json({message: "Internal server error"})
     }
});

//dlete budget
//api prefix api/budget/id
route.delete('/:id', authenticateToken, async(req,res)=>{
    const {id} = req.params;
    const user = req.user
    try {
        const budgetItem = user.Budget;
        const budgetId = new mongoose.Types.ObjectId(id);

        const budgetIndex = budgetItem.findIndex(budget => budget._id.equals(budgetId))
        if (budgetIndex !== -1){
            budgetItem.splice(budgetIndex, 1);
            await user.save();
            return res.status(201).json({message: "Default Budget deleted successfully "})
        }else{
            return res.status(404).json({message: "No budget found"})
        }

    } catch (err) {
        console.log(`Error deleting budget item ${err}`);
        return res.status(500).json({message: "Internal server error"})
    }
})

module.exports = route;