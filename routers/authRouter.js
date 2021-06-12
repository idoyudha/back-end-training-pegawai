const router = require('express').Router()
const { authController } = require('../controllers')

router.get('/login', authController.login)

module.exports = router