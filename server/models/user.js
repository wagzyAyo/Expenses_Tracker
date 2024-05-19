const mongoose = require('mongoose')

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
    Expenses: [
        {
            category: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model("users", userSchema)

module.exports = User