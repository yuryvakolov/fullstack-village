const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: false
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectID
    }
})

module.exports = mongoose.model("category", categorySchema)
