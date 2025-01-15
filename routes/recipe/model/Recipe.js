const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
        recipeName: {
            type: String
        }
    })

    module.exports = mongoose.model("recipe", recipeSchema)
