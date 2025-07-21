const FoodController = require('../controller/foods.controller');

async function foodRouters (fastify , option){
    fastify.post('/foods/create', {preHandler:adminMiddlewares} , FoodController.createFood);
    fastify.get('/foods', {preHandler:adminMiddlewares} , FoodController.getAllFoods);
    fastify.delete('/foods/delete/:id', {preHandler:adminMiddlewares},FoodController.deleteFood);
    fastify.put('/foods/update/:id', {preHandler:adminMiddlewares},FoodController.updateFoods)
}

module.exports = foodRouters;