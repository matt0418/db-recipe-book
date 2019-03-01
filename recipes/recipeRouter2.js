const router = require('express').Router()
const Recipe = require('./recipe-model')

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.status(200).json(recipes)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    const {name, dishes_id} = req.body
    if (!name || !dishes_id) {
        return res.send({ message: "Please provide a name and Dish ID" })
    } else {
        try {
            const recipe = await Recipe.addRecipe(req.body)
            res.status(200).json(recipe)
        } catch(error) {
            console.log(error)
            res.status(500).json({ error: "There was an error adding the recipe" })
        }
    }
})

module.exports = router