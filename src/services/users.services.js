const UserModel = require('../models/Users')

async function createUser(data) {
    const user = await UserModel.create(data);
    return user
}

async function getAllUsers() {
    const user = await UserModel.find();
    return user
}

async function getUserByEmail(email){
    const user = await UserModel.findOne({email:email});
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
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserByID,
    login,
}