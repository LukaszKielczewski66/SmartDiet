const express = require(`express`);
const pool = require('../../pgUtils');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('rejestracja ok');
})

router.post('/', (req, res) => {
    if (req.body) {
      const {
        firstname,
        lastname,
        email,
        password,
        height,
        weight,
        age,
        gender,
        activity,
        goal
      } = req.body;
  
      pool.query('ogarne tu zapytanie');
    }
    res.send('register')
  })

  module.exports = router;