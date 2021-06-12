const router = require('express').Router()
const { jobTaskController } = require('../controllers')

router.get('/get-all', jobTaskController.readJobTask)

module.exports = router