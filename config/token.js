const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, "karyawan")
    },

    readToken: (request, response, next) => {
        // console.log('Request read token', request.token)
        jwt.verify(request.token, "karyawan", (error, decoded) => {
            if (error) {
                return response.status(401).send('Token Error: user not authorized')
            }
            request.user = decoded 
            next()
        })
    }
}