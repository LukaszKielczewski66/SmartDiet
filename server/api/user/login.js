const express = require(`express`);
const jwt = require('jsonwebtoken')
const pool = require('../../pgUtils').pool;
const router = express.Router();

router.get('/', (req, res) => {
    res.send('login here :)')
})

router.post('/', (req, res) => {
    const { email, password } = req.body
    pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password],
      (error, results) => {
        if (error) {
          throw error
        }
  
        if (results.rows.length === 0) {
          res.status(401).json({ message: 'Invalid email or password' })
        } else {
          const token = jwt.sign(
            { email, password },
            process.env.NUXT_ENV_API_SECRET
          )
          res.status(200).json({ token })
          // res.status(200).json({ message: 'Logged in' });
        }
      }
    )
  })

  module.exports = router;