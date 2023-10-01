require('dotenv').config();

module.exports = {
    user: process.env.NUXT_ENV_USER || 'postgres',
    host: process.env.NUXT_ENV_HOST || 'localhost',
    database: process.env.NUXT_ENV_DATABASE || 'postgres',
    password: process.env.NUXT_ENV_PASSWORD || 'asdasd',
    port: process.env.NUXT_ENV_PORT || 5432
}