const Recipe = require('../model/Recipe')
const getAllRecipes = async (req, res)=>{
    try {
        const allRecipes = await Recipe.find({})
        res.json({message:"All recipes found", payload: allRecipes})
        
    } catch (error) {
        res.status(500).json({message:"Server error", error: error.message})
    }
    
    
}

const createRecipe = async (req,res)=>{
    const {recipeName} = req.body
}

module.exports = {
    getAllRecipes,
    createRecipe
}