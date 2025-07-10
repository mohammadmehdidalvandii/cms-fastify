const UserModel = require('../models/Users')

async function register(name , email , phone , password) {
    const user = await UserModel.create(name , email , phone , password );
    return user
}

async function getAllUsers() {
    const user = await UserModel.find();
    return user
}

async function getUserByEmail(email){
    const user = await UserModel.findOne(email);
    return user
}

async function getUserByID (id){
    const user = await UserModel.findOne({_id:id})
    return user
}

async function login(email , password) {
    const user = await UserModel.findOneAndUpdate(email , password);
    return user
}

module.exports = {
    register,
    getAllUsers,
    getUserByEmail,
    getUserByID,
    login,
}