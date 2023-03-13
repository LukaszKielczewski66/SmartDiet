const express = require('express')
const app = express()

const register = require('./api/user/register')
const login = require('./api/user/login')
const recipes = require('./api/recipes/recipes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('server work');
});
app.use('/register', register);
app.use('/login', login);
app.use('/recipes', recipes);


export default {
  path: '/api',
  handler: app,
}
