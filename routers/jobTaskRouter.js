const router = require('express').Router()
const { jobTaskController } = require('../controllers')
const { readToken } = require('../config')

router.get('/get-all', jobTaskController.readJobTask)
router.get('/get/:id', readToken,jobTaskController.readJobTask)
router.post('/create', readToken, jobTaskController.createJobTask)
router.patch('/update', readToken, jobTaskController.updateJobTask)
router.delete('/delete/:id', readToken, jobTaskController.deleteJobTask)

module.exports = router