const ProductsModel = require('../models/Products');

async function createProducts(data) {
    const product = await ProductsModel.create(data);
    return product
}

async function getProductByID(id) {
    const product = await ProductsModel.findOne({_id:id});
    return product
}

async function getProductByName(name) {
    const product =  await ProductsModel.findOne({name:name});
    return product
}

async function getAllProducts () {
    const product = await ProductsModel.find({});
    return product
}

async function deleteProductByID (id) {
    const product = await ProductsModel.findOneAndUpdate({_id:id});
    return product
}

async function updateProductByID (id, data) {
    const product = await ProductsModel.findOneAndUpdate({_id:id}, data, {new: true});
    return product
}

module.exports = {
    createProducts,
    getProductByID,
    getProductByName,
    getAllProducts,
    deleteProductByID,
    updateProductByID,
}