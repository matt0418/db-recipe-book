const express = require('express')
const helmet = require('helmet')

const recipeRouter = require('../recipes/recipeRouter')
const recipeRouter2 = require('../recipes/recipeRouter2')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/dishes', recipeRouter)
server.use('/api/recipes', recipeRouter2)

module.exports = server