require('dotenv').config();

module.exports = {
    user: process.env.USER || postgres,
    host: process.env.HOST || localhost,
    database: process.env.DATABASE || postgres,
    password: process.env.PASSWORD || asdasd,
    port: process.env.PORT || 5432
}