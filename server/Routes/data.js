const express = require('express');
const authenticateToken = require('../utils/authToken');
const mongoose = require('mongoose')


const router = express.Router()

//Get users data
//prefix api/data
router.get('/', authenticateToken, (req,res)=>{
    const user = req.user;
    return res.status(200).json({user})
})

//add expenses
//prefix  /api/data
router.post('/add', authenticateToken , async (req, res)=>{
    let {category, amount, description, date} = req.body;
    amount = parseInt(amount)

    if(!category || !amount || !description || !date){
       return res.status(400).json({message: "please provide all required fields. category, amount, description, date"})
    }
    try{
        const user = req.user
        if (!user){
           return res.status(401).json({message: "User not found"})
        }
        const newExpense = {category, amount, description, date}
        user.Expenses.push(newExpense)
        await user.save()
        
        res.status(201).json({message: "Expense added successfully"})
    } catch(err){
        console.log(`Error adding expense ${err}`)
        return res.status(500).json({message: 'internal server error'})
    }
})

//delete expenses
//prefix  /api/data
router.delete('/:id/delete', authenticateToken,  async (req, res)=>{
    const user = req.user
    const {id} = req.params;
    try {
        // Log the id from params for debugging
        console.log('ID from params:', id);

        // Convert id to ObjectId if necessary
        const expenseId = new mongoose.Types.ObjectId(id);

        // Log the converted ObjectId for debugging
        console.log('Converted ObjectId:', expenseId);

        // Find the index of the expense to delete
        const expenseIndex = user.Expenses.findIndex(exp => exp._id.equals(expenseId));

        // Log the index found
        console.log('Expense Index:', expenseIndex);

        if (expenseIndex !== -1) {
            // Remove the expense from the array
            user.Expenses.splice(expenseIndex, 1);

            // Save the updated user document
            await user.save();

            // Log the user after save
            console.log('User after save:', user);
            
            return res.status(200).json({ message: "Expense deleted successfully" });
        } else {
           return res.status(404).json({ message: "Expense not found" });
        }
    }  catch (err) {
        console.log("Error deleting expense: "+ err)
        return res.status(501).json({message: 'Internal server error'})
    }
    
})


//update expense
//prefix api/data
router.put('/:id/update', authenticateToken, async (req, res)=>{
    const user = req.user
    const {id} = req.params
    const {category, amount, description, date} = req.body

    const expenseId = new mongoose.Types.ObjectId(id);

    const expenseIndex = user.Expenses.findIndex(exp => exp._id.equals(expenseId))
    const userExpenses = user.Expenses

    
    try {
        if (!category || !amount || !description || !date){
            return res.status(400).json({message: "Add all required fields. category, amount , description, date"})
        }
        
        if (expenseIndex !== -1){
            userExpenses[expenseIndex].category = category;
            userExpenses[expenseIndex].amount = amount;
            userExpenses[expenseIndex].description = description;
            userExpenses[expenseIndex].date = date
            
            await user.save()
            return res.status(201).json({message: "Expense updated successfully"})
        }else{
            return res.status(404).json({message: "Expense not found"})
        }
    } catch (err) {
        console.log(`Error updating user data ${err}`);
        return res.status(501).json({message: "Internal server error"})
    }
})


module.exports = router