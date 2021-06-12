const { db, dbQuery } = require('../config')

module.exports = {
    readPosisi: async (request, response, next) => {
        try {
            let string = request.params.posisi.toLowerCase()
            let posisi = string.charAt(0).toUpperCase() + string.slice(1)
            // console.log(posisi)
            let queryPosisi = `SELECT pegawai.idpegawai, fullName, email, telp, status, posisi 
            FROM pegawai JOIN posisi_pegawai ON pegawai.idpegawai = posisi_pegawai.idpegawai 
            JOIN posisi ON posisi_pegawai.idposisi = posisi.idposisi WHERE posisi = ${db.escape(posisi)};`
            let getData = await dbQuery(queryPosisi)
            // if (getData.length == 0) {
            //     response.status(404).send({message: "Position not found!"})
            // }
            response.status(200).send(getData)

        } 
        catch (error) {
            next(error)
        }
    }
}