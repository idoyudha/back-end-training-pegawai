const { db, dbQuery } = require('../config')

module.exports = {
    createJobTask: async (request, response, next) => {
        try {
            console.log(request.user)
            let auth  = request.user.idrole
            if (auth == 1 || auth == 2) {
                
            }
        } 
        catch (error) {
            next(error)
        }
    },

    readJobTask: async (request, response, next) => {
        try {
            if (request.params.id) {
                let queryJobTask = `SELECT fullName, jobtask FROM pegawai JOIN job_task ON pegawai.idpegawai = job_task.idpegawai WHERE idpegawai = ${request.params.id};`
                let getData = await dbQuery(queryJobTask)
                response.status(200).send(getData)
            }
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
            
        } 
        catch (error) {
            next(error)
        }
    },

    deleteJobTask: async (request, response, next) => {
        try {
            
        } 
        catch (error) {
            next(error)
        }
    },
}
