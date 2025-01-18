const express = require('express')
const router = express.Router()

const {getAllRecipes} = require('./controller/recipeController')
const {createRecipe} = require('./controller/recipeController')

router.get('/get-all-recipes', getAllRecipes)

module.exports = router