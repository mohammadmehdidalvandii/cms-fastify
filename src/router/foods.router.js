const FoodController = require('../controller/foods.controller');

async function foodRouters (fastify , option){
    fastify.post('/foods/create' , FoodController.createFood);
    fastify.get('/foods' , FoodController.getAllFoods);
}

module.exports = foodRouters;