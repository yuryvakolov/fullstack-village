const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/expenses')
const router = express.Router()

//localhost:5000/api/expenses
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

//localhost:5000/api/expenses/:id
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)

//localhost:5000/api/expenses/:id
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

//localhost:5000/api/expenses
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)

//localhost:5000/api/expenses/:id
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)

module.exports = router
