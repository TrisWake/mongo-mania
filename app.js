const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const recipeRouter = require('./routes/recipe/recipeRouter')

mongoose
    .connect("mongodb://localhost:27017/mongo-mania")
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use('/', recipeRouter)