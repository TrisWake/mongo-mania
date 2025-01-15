const Recipe = require('../model/Recipe')
const getAllRecipes = (req, res)=>{
    recipe.find({})
}

const createRecipe = (req,res)=>{
    const {recipeName} = req.body
}

module.exports = {
    getAllRecipes
}