import { Pool } from 'pg'
const { user, host, database, password, port } = require('../config');

const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
  })

  // module.exports = {pool};
  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }
