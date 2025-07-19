const FoodsModel = require('../models/Foods');

async function createFood(data) {
    const food = await FoodsModel.create(data);
    return food
}

async function getAllFoods() {
    const foods = await FoodsModel.find().sort({createdAt:-1})
    return foods
}

async function getFoodByName(name) {
    const food = await FoodsModel.findOne({name:name})
    return food
}

async function getFoodByID(id) {
    const food = await FoodsModel.findById({_id:id})
    return food
}

async function deleteFoodByID(id){
    const food = await FoodsModel.findOneAndDelete({_id:id});
    return food
}

async function updateFood(price , id) {
    const food = await FoodsModel.findOneAndUpdate(
        {_id:id},
        {$set:{price:price}},
        {new:true}
    )
    return food
}

module.exports = {
    createFood,
    getAllFoods,
    getFoodByName,
    deleteFoodByID,
    getFoodByID,
    updateFood,
}