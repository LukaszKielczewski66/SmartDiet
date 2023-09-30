const express = require('express');
const app = express();
const session = require('express-session');

app.get('/', (req, res) => {
    res.send('server work');
})

app.use(session({
    secret: sessionKeySecret,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 },
    resave: false
}))

app.use(express.urlencoded({ extended: true }));

// routes
app.use(require('./routes/web'));


module.exports = app;