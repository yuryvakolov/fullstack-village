const express = require('express')
const passport = require('passport')
const controller = require('../controllers/order')
const router = express.Router()

//localhost:5000/api/order
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

//localhost:5000/api/order
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)

module.exports = router
