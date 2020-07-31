const Expenses = require('../models/Expenses')

const errorHandler = require('../utills/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const expenses = await Expenses
        res.status(200).json(expenses)
    } catch (e) {
        errorHandler(res, e)
    }
}
