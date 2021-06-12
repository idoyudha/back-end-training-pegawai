const mysql = require('mysql') // npm install mysql
const util = require('util') // built in

const db = mysql.createPool({
    host: 'localhost',
    user: 'ido-p',
    password: 'ido123',
    database: 'karyawan',
    multipleStatements: true
})

const dbQuery = util.promisify(db.query).bind(db)

module.exports = { db, dbQuery}