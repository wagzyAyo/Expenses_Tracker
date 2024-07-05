const mongoose = require('mongoose')
const expenseSchema = require('./expense')
const budgetSchema = require('./budget')

const userSchema = mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    Expenses: [expenseSchema],
    Budget: [budgetSchema]
})

const User = mongoose.model("users", userSchema)

module.exports = User