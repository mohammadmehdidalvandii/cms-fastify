const userController = require('../controller/users.controller');
// const authMiddlewares = require('../middlewares/authMiddlewares')

async function usersRouter(fastify , option) {
        fastify.post('/users/register', userController.registerUser)
        fastify.post('/users/login',  userController.loginUser)
        fastify.get('/users' ,userController.getAll)
}

module.exports = usersRouter