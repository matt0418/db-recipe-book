const router = require('express').Router()
const Recipe = require('./recipe-model')


router.get('/', async (req, res) => {
    try {
        const dishes = await Recipe.getDishes()
        res.status(200).json(dishes)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const dish = await Recipe.getDish(id)
        res.status(200).json(dish)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.send({ message: "Please provide a dish name"})
    } else {
        try {
            const dish = await Recipe.addDish(req.body)
            return res.status(201).json(dish)
        } catch(error) {
            console.log(error)
            res.status(500).json({error: "There was an error adding the dish"})
        }
    }
})

module.exports = router