const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bearerToken = require('express-bearer-token')

app.use(cors())
app.use(bearerToken())
app.use(express.json())

const { authRouter, jobTaskRouter, posisiRouter, pegawaiRouter } = require('./routers')
const { db } = require('./config/database')
app.use('/auth', authRouter)
app.use('/jobtask', jobTaskRouter)
app.use('/posisi', posisiRouter)
app.use('/pegawai', pegawaiRouter)


app.get('/', (require, response) => {
    response.send('Hello!')
})

db.getConnection(( error, connection ) => {
    if (error) {
        return console.error('error MySQL: ', error.message)
    }
    console.log(`Connecting to MySQL Server : ${connection.threadId}`)
})

// Error handling 
app.use((error, request, response, next) => {
    console.log("Error", error)
    response.status(500).send({status: "Error MySQL!", messages: error})
})

app.listen(port, () => {
    console.log(`App listen on http://localhost:${port}`)
})