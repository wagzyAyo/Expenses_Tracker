const mongoose = require('mongoose')
const expenseSchema = require('./expense')

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
    Expenses: [expenseSchema]
})

const User = mongoose.model("users", userSchema)

module.exports = User