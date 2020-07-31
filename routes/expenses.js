const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/expenses')
const router = express.Router()

//localhost:5000/api/expenses
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

module.exports = router
