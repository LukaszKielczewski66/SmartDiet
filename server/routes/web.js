const bodyParser = require('body-parser'); // middleware body-parser
const express = require('express');
const router = new express.Router();
const UserController = require('../controllers/user-controller');
const RecipesController = require('../controllers/recipes-controller');

router.use(bodyParser.json());

// User controller
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/details/:email', UserController.getUserDetails);

// Recipes controller
router.get('/recipes', RecipesController.getRecipes);


module.exports = router;