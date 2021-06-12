const { db, dbQuery, createToken } = require('../config')

module.exports = {
    login: async (request, response, next) => {
        try {
            let email = request.body.email
            let password = request.body.password
            if (email && password) {
                let queryLogin = `SELECT * FROM pegawai WHERE email=${db.escape(email)} AND password=${db.escape(password)};`
                let getData = await dbQuery(queryLogin)
                // console.log(getData.length)
                if (getData.length == 0) {
                    response.status(404).send({message: "Email or password not match!"})
                }
                else {
                    let { idpegawai, fullName, email, telp, idrole, status } = getData[0]
                    let token = createToken({ idpegawai, fullName, email, telp, idrole, status })
                    response.status(200).send({ idpegawai, fullName, email, telp, idrole, status, token })
                }
            }
        } 
        catch (error) {
            next(error)
        }
    }
}