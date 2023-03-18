/* eslint-disable no-unused-vars */
const { query } = require('express');
const express = require(`express`);
const db = require('../../pgUtils')
const router = express.Router();

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
      db.query('INSERT INTO users (firstname, lastname, email, password, height, weight, age, gender, activity_id, goal_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [firstname, lastname, email, password, height, weight, age, gender, activity, goal], (err, result) => {
        if (!result) {
        console.log('Insert failed:', err);
        // console.log(res.json(err))
        return res.json(err)
        }
        console.log('Insert successful: ',result)
        res.send(result)
      })
    }
  })

  module.exports = router;