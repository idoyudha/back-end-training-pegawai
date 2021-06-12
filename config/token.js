const { request } = require('express')
const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, "karyawan")
    },

    readToken: (require, response, next) => {
        console.log('Request read token',request.token)
        jwt.verify(require.token, 'karyawan', (error, decoded) => {
            if (error) {
                return response.status(401).send('User not authorize')
            }

            request.user = decoded 

            next()
        })
    }
}