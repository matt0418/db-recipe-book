const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    let rows = db('dishes')
        .orderBy('id', 'asc')

    return rows
}

function getDish(id) {
    return db('dishes')
        // .where({ id })
        .join('recipes', 'recipes.dishes_id', 'dishes.id')
        .select('recipes.id', 'dishes.name', 'recipes.dishes_id', 'recipes.name')
        .where({ dishes_id: id })
}

async function addDish(dish) {
    const [id] = await db('dishes').insert(dish)
    return db('dishes')
        .where({ id })
        .first()
}

function getRecipes() {
    let rows = db('recipes').orderBy('id', 'asc')
    return rows
}

async function addRecipe(recipe) {
    const [id] = await db('recipes').insert(recipe)
    return db('recipes')
        .where({ id })
        .first()
}