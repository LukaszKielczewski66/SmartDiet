/* eslint-disable no-console */
const express = require(`express`)
const jwt = require('jsonwebtoken')
const db = require('../../pgUtils')
const router = express.Router()

// router.get('/', (req, res) => {
//   console.log('test')
//     res.send('recipes here :)');
// })

router.get('/', (req, res) => {
  try {
    const authHeader = req.headers.authorization
    const userId = authHeader.split(' ')[1]
    const decoded = jwt.verify(userId, process.env.NUXT_ENV_API_SECRET)
    console.log('Auth success: ', !!decoded)
    db.query('SELECT * FROM recipes', (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' }) // Set 500 status code and return JSON error message
        return
      }

      res.json(results.rows)
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Unauthorizeed' }) // Set 401 status code and return JSON error message
  }

  // TODO: add logic to filter recipes based on user's weight and height
})

module.exports = router
