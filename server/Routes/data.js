const express = require('express');
const User = require('../models/user')
const authenticateToken = require('../utils/authToken');



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
        const expenseIndex = user.Expenses.findIndex(exp => exp._id.toString() === id);
        console.log(expenseIndex)

        if (expenseIndex !== -1){
            user.Expenses.slice(expenseIndex, 1);

            console.log('updated expense', user.Expenses)
            await user.save();

            console.log('User after save', user)
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
        const updateExpense = await User.findByIdAndUpdate(id)
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