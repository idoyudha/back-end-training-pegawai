const router = require('express').Router()
const { pegawaiController } = require('../controllers')
const { readToken } = require('../config')

router.get('/get', readToken, pegawaiController.readDataPegawai)
router.post('/create', readToken, pegawaiController.createDataPegawai)
router.patch('/update/', readToken, pegawaiController.updateDataPegawai)
router.delete('/delete/:id', readToken, pegawaiController.deleteDataPegawai)

module.exports = router

