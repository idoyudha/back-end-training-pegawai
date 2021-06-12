const router = require('express').Router()
const { posisiController } = require('../controllers')

router.get('/:posisi', posisiController.readPosisi)

module.exports = router