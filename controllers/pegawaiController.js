const { db, dbQuery } = require('../config')


module.exports = {
    createDataPegawai: async (request, response, next) => {
        try {
            console.log('read', request.user.idpegawai)
            // console.log("Body", request.body)
            let fullName = db.escape(request.body.fullName)
            let email = db.escape(request.body.email)
            let telp = db.escape(request.body.telp)
            let password = db.escape(request.body.password)
            let idrole = db.escape(request.body.idrole)
            let idposisi = db.escape(request.body.idposisi)
            if (request.user.idrole == 1) {
                let queryPegawai = `INSERT INTO pegawai (fullName, email, telp, password, idrole) VALUES (${fullName}, ${email}, ${telp}, ${password}, ${idrole})`
                let dataPegawai = await dbQuery(queryPegawai)
                let queryPosisiPegawai = `INSERT INTO posisi_pegawai (idpegawai, idposisi) VALUES (${dataPegawai.insertId}, ${idposisi})`
                await dbQuery(queryPosisiPegawai)
                response.status(200).send({message: "Success create data pegawai"})
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },

    readDataPegawai: async (request, response, next) => {
        try {
            // console.log('read', request.user)
            let queryPegawai = `SELECT pegawai.idpegawai, fullName, email, telp, status, name as role FROM pegawai JOIN role ON pegawai.idrole = role.idrole`
            let queryJobTask = `SELECT * FROM job_task`
            let DataPegawai = await dbQuery(queryPegawai)
            let DataJobTask = await dbQuery(queryJobTask)
            // console.log(getDataPegawai, getDataJobTask)
            DataPegawai.forEach(elementP => {
                elementP.jobtask = []
                DataJobTask.forEach(elementJ => {
                    if (elementP.idpegawai == elementJ.idpegawai) {
                        elementP.jobtask.push(elementJ)
                    }
                });
            });
            response.status(200).send(DataPegawai)
        } 
        catch (error) {
            next(error)
        }
    },

    updateDataPegawai: async (request, response, next) => {
        try {
            console.log('read', request.user.idrole)
            // console.log('params', request.params.id)
            if (request.user.idrole == 1) {
                let queryUpdate = `UPDATE pegawai SET ? WHERE (idpegawai = (SELECT idpegawai WHERE email = ${db.escape(request.body.email)}))`
                let result = await dbQuery(queryUpdate, request.body)
                response.status(200).send(result)
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },

    deleteDataPegawai: async (request, response, next) => {
        try {
            console.log('read', request.user.idrole)
            // console.log('params', request.params.id)
            if (request.user.idrole == 1) {
                let queryDelete = `UPDATE pegawai SET status = 'Non-Active' WHERE (idpegawai = ${request.params.id})`
                let result = await dbQuery(queryDelete)
                response.status(200).send(result)
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },
}
