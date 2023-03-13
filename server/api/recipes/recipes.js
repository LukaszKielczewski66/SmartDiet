const express = require(`express`);
const pool = require('../../pgUtils');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('recipes here');
})

router.get('/recipes', (req, res) => {
    try {
      const authHeader = req.headers.authorization
      const userId = authHeader.split(' ')[1]
      const decoded = jwt.verify(userId, process.env.NUXT_ENV_API_SECRET)
      console.log(decoded)
    } catch (error) {
      console.log(error)
      res.status(401).json({ message: 'Unauthorized' }); // Set 401 status code and return JSON error message
      throw error
    }
    // const { weight, height } = req.query;
  
    // TODO: add logic to filter recipes based on user's weight and height
  
    pool.query('SELECT * FROM recipes', (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' }); // Set 500 status code and return JSON error message
        return
      }
  
      res.json(results.rows)
    })
  })

module.exports = router;