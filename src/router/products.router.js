const ProductController = require('../controller/products.controller');
const adminMiddlewares = require('../middlewares/adminMiddlewares');

async function productsRouter(fastify , option) {
    fastify.post('/products/create', {preHandler:adminMiddlewares} ,ProductController.createProduct);
    fastify.get('/products', {preHandler:adminMiddlewares}  , ProductController.getAllProduct);
    fastify.delete('/products/delete/:id', {preHandler:adminMiddlewares}  , ProductController.deleteProductID);
    fastify.put('/products/update/:id', {preHandler:adminMiddlewares}  , ProductController.updateProductId)
}

module.exports = productsRouter