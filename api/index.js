// api/index.js

const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.NUXT_ENV_PG_PASSWORD,
  port: 5432,
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
      if (error) {
        throw error;
      }
  
      if (results.rows.length === 0) {
        res.status(401).json({ message: 'Invalid email or password' });
      } else {
        const token = jwt.sign({ email, password }, process.env.NUXT_ENV_API_SECRET);
        res.json({ token });
      }
    });
  });

  app.get('/recipes', (req, res) => {
    const authHeader = req.headers.authorization;
    const userId = authHeader.split(' ')[1];
    try{
      const decoded = jwt.verify(userId, process.env.NUXT_ENV_API_SECRET);
      console.log(decoded)
    } catch  (error) {
      console.log(error)
      throw error;
    }
    // const { weight, height } = req.query;
  
    // TODO: add logic to filter recipes based on user's weight and height
  
    pool.query('SELECT * FROM recipes', (error, results) => {
      if (error) {
        throw error;
      }
  
      res.json(results.rows);
    });
  });



export default {
  path: '/api',
  handler: app
}