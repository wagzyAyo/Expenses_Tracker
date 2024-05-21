const express = require('express');
const authenticateToken = require('../utils/authToken');
const mongoose = require('mongoose')


const router = express.Router()

router.get('/', authenticateToken, (req,res)=>{
    const user = req.user;
    res.status(200).json({mesage: `Here is your data ${user}`})
})

//add expenses
//prefix  /api/data
router.post('/add', authenticateToken , async (req, res)=>{
    let {category, amount, description, date} = req.body;
    amount = parseInt(amount)

    if(!category || !amount || !description || !date){
        res.status(400).json({message: "please provide all required fields. category, amount, description, date"})
    }
    try{
        const user = req.user
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
            
            res.status(200).json({ message: "Expense deleted successfully" });
        } else {
            res.status(404).json({ message: "Expense not found" });
        }
    }  catch (err) {
        console.log("Error deleting expense: "+ err)
        res.status(501).json({message: 'Internal server error'})
    }
    
})


//update expense
//prefix api/data
router.put('/:id/update', async (req, res)=>{
    const user = req.user
    const {id} = req.params
    const {category, amount, description, date} = req.body

    if (!category || !amount || !description || !date){
        res.status(400).json({message: "Add all required fields. category, amount , description, date"})
    }
    try {
        const updateExpense = user.findByIdAndUpdate(id, 
            {category: category,
             amount: amount,
             description: description,
             date: date
            }
        
        )
        if (updateExpense){
            await user.save()
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