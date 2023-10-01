const jwt = require('jsonwebtoken')
const db = require('../db/pgUtils');

class RecipesController {
    getRecipes(req, res) {
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
        } catch (err) {
            console.log(err);
            res.status(401).json({ message: 'Unauthorizeed' }) // Set 401 status code and return JSON error message
        }
    }
}

module.exports = new RecipesController();