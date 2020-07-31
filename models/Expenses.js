const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expensesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    summary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("expenses", expensesSchema)
