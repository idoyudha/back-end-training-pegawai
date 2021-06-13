const { db, dbQuery } = require('../config')

module.exports = {
    createJobTask: async (request, response, next) => {
        try {
            let auth  = request.user.idrole
            console.log(auth)
            let idpegawai = db.escape(request.body.idpegawai)
            let jobtask = db.escape(request.body.jobtask)
            let deadline = db.escape(request.body.deadline)
            // date format is ISO Date <"2021-09-01">
            if (auth == 1 || auth == 2) {
                let queryJobTask = `INSERT INTO job_task (idpegawai, jobtask, deadline) VALUES (${idpegawai}, ${jobtask}, ${deadline})`
                let result = await dbQuery(queryJobTask)
                response.status(200).send(result)
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },

    readJobTask: async (request, response, next) => {
        try {
            console.log(request.user)
            let auth  = request.user.idrole
            if (auth == 1 || auth == 2) {
                let queryJobTask = `SELECT fullName, jobtask FROM pegawai JOIN job_task ON pegawai.idpegawai = job_task.idpegawai WHERE idpegawai = ${request.params.id};`
                let getData = await dbQuery(queryJobTask)
                response.status(200).send(getData)
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },

    readAllJobTask: async (request, response, next) => {
        try {
            let queryJobTask = `SELECT fullName, jobtask FROM pegawai JOIN job_task ON pegawai.idpegawai = job_task.idpegawai;`
            let getData = await dbQuery(queryJobTask)
            response.status(200).send(getData)
        } 
        catch (error) {
            next(error)
        }
    },

    updateJobTask: async (request, response, next) => {
        try {
            let auth  = request.user.idrole
            let idpegawai = db.escape(request.body.idpegawai)
            if (auth == 1 || auth == 2) {
                let queryUpdate = `UPDATE job_task SET ? WHERE idpegawai = ${idpegawai}`
                let result = await dbQuery(queryUpdate, request.body)
                response.status(200).send(result)
            }
            response.status(401).send('User not authorize')
        } 
        catch (error) {
            next(error)
        }
    },

    deleteJobTask: async (request, response, next) => {
        try {
            let auth  = request.user.idrole
            let idpegawai = db.escape(request.params.id)
            console.log(auth, idpegawai)
            if (auth == 1 || auth == 2) {
                let queryIdTask = `SELECT idtask FROM job_task WHERE idpegawai = ${idpegawai}`
                let resultId = await dbQuery(queryIdTask)
                // console.log("queryId", result[0].idtask)
                let queryDelete = `DELETE FROM job_task WHERE idtask = ${resultId[0].idtask}`
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
