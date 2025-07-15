const fastify = require('fastify')({logger:true});
const dotenv = require('dotenv').config();
const connectToDB = require('./config/db');
// import Routing
const usersRouter = require('./router/users.router');
const foodRouters = require('./router/foods.router');
// Connections database 
connectToDB();

// router 
fastify.register(usersRouter)
fastify.register(foodRouters)

// server
const server = async ()=>{
    try{
        await fastify.listen({port:3000});
        console.log("server is running on port 3000");
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
};

server();