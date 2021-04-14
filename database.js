
const mysql = require('mysql');
const config = require('./config/config')



module.exports = {
    connect: mysql.createConnection(config)
}