const UserServices = require('../services/users.services');
const {role} = require('../utils/constants');
const  {generateToken , hashedPassword} = require('../utils/auth');


async function registerUser (req , reply){
    try{
        const {name , email , phone , password} = req.body;
        // First Validation
        if(!name || !email || !phone || !password){
            return reply.code(400).send({
                statusCode:400,
                message:"All field are required ❌",
            })
        };

        // Exist user 
        const existUser = await UserServices.getUserByEmail(email);
        if(existUser) return reply.code(409).send({
            statusCode:409,
            message:"User is Already ❌"
        })

        // User Role
        const users = await UserServices.getAllUsers();
        const userRole = users.length > 0 ? role.USER : role.ADMIN;

        // hashed Password user role
        const hashPassword = await hashedPassword(password);

        // create new user 
        const user = await UserServices.createUser({
            name,
            email,
            phone,
            password:hashPassword,
            roles:userRole
        })
        if(!user){
            throw new Error("User creation Failed ❌")
        }

        // create Token 
        const token = generateToken({email , phone , name , roles:userRole})

        // response ok
        return reply.code(201).send({
            statusCode:201,
            message:"User created successfully ✅",
             data: {token}
        })

    }catch(error){
        console.log("Error register User =>", error);
        return reply.code(500).send({
            statusCode:500,
            message:"Server Internal Register User =>",
            error:error.message
        })
    }
}

module.exports = {
    registerUser
}