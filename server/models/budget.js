const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        category: String,
        amount: Number
    },{_id: true}
)

module.exports =  budgetSchema;