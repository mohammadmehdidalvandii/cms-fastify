const ProductController = require('../controller/products.controller');

async function productsRouter(fastify , option) {
    fastify.post('/products/create',ProductController.createProduct);
    fastify.get('/products' , ProductController.getAllProduct);
    fastify.delete('/products/delete/:id' , ProductController.deleteProductID);
}

module.exports = productsRouter