const userController = require('../controller/users.controller');

async function usersRouter(fastify , option) {
        fastify.post('/users', userController.registerUser)
}

module.exports = usersRouter