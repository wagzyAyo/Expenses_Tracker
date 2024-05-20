const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    category: String,
    description: String,
    amount: Number,
    date: String,
}, {_id: true});

module.exports = expenseSchema