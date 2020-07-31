const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expensesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sum: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectID
    }
})

module.exports = mongoose.model('expenses', expensesSchema)
