const express = require('express');
const router = new express.Router();
const UserController = require('../controllers/user-controller');
const RecipesController = require('../controllers/recipes-controller');

// User controller
router.post('/register', UserController.register);
router.get('/login', UserController.login);
router.get('/details', UserController.getUserDetails);

// Recipes controller
router.get('/recipes', RecipesController.getRecipes);


module.exports = router;