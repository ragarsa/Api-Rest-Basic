const app = require('./app')
const mysql = require('mysql');
const config = require('./config/config')


const connectDb =
    mysql.createPool(config)

connectDb.getConnection((err) => {
    if (err) {
        console.log(err)
        return;
    } else {
        console.log('Welcome', connectDb)
    }

})



app.listen(8080, () => console.log('Connected in port',8080));

module.exports = {
    connect: mysql.createConnection(config)
}