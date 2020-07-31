const Expenses = require('../models/Expenses')
const Position = require('../models/Position')
const errorHandler = require('../utills/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const expenses = await Expenses.find({
            category: req.params.year,
        })
        res.status(200).json(expenses)
        // res.status(200).json({
        //     message: 'Пока нет категорий'
        // })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function (req, res) {
    try {
        const expenses = await Category.findById(req.params.id)
        res.status(200).json(expenses)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Category.remove({_id: req.params.id})
        await Position.remove({expenses: req.params.id})
        res.status(200).json({
            message: 'Категория была удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    console.log(req.file)
    const expenses = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    })
    try {
        await expenses.save()
        res.status(201).json(expenses)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name
    }

    if (req.file) {
        updated.imageSrc = req.file.path
    }
    try {
        const expenses = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(expenses)
    } catch (e) {
        errorHandler(res, e)
    }
}
