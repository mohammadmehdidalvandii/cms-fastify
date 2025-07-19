const ProductController = require('../controller/products.controller');

async function productsRouter(fastify , option) {
    fastify.post('/products/create',ProductController.createProduct);
}

module.exports = productsRouter