const express = require('express');
const userModel = require('../models/user')
const { route } = require('./auth');



const router = express.Router()


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