const express = require('express');
const userModel = require('../models/user')
const authenticateToken = require('../utils/authToken');



const router = express.Router()

//add expenses
//prefix  /api/data
router.post('/add', authenticateToken , async (req, res)=>{
    const {category, amount, description, date} = req.body;
    amount = parseInt(amount)

    if(!category || !amount || !description || !date){
        res.status(400).json({message: "please provide all required fields. category, amount, description, date"})
    }
    try{
        const user = userModel.findOne({email: req.body.email});
        if (!user){
            res.status(401).json({message: "User not found"})
        }
        const newExpense = {category, amount, description, date}
        user.Expenses.push(newExpense)
        await user.save()
        
        res.status(201).json({message: "Expense added successfully"})
    } catch(err){
        console.log(`Error adding expense ${err}`)
        res.status(500).json({message: 'internal server error'})
    }
})

//delete expenses
//prefix  /api/data
router.delete('/:id/delete', async (req, res)=>{
    const {id} = req.params;
    try {
        const deleteExpenses = await userModel.findByIdAndDelete(id)
        if (deleteExpenses){
            res.status(201).json({message: "Expense deleted successfully"})
        } else{
            res.status(404).json({message: "Expense not found"})
        }
    } catch (err) {
        console.log("Error deleting expense: "+ err)
        res.status(501).json({message: 'Internal server error'})
    }
    
})


//update expense
//prefix api/data
router.put('/:id/update', async (req, res)=>{
    const {id} = req.params

    try {
        const updateExpense = await userModel.findByIdAndUpdate(id)
        if (updateExpense){
            res.status(201).json({message: "Expense updated successfully"})
        }else{
            res.status(404).json({message: "Expense not found"})
        }
    } catch (err) {
        console.log(`Error updating user data ${err}`);
        res.status(501).json({message: "Internal server error"})
    }
})


module.exports = router