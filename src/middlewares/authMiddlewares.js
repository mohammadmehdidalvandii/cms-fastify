const {decodedToken} = require('../utils/auth');

async function authMiddlewares (req , reply){
    try{
        let token = req.headers['authorization'].split(' ')[1]
        if(!token) return reply.code(401).send('token is required')
        const decode = decodedToken(token);
        console.log("decode =>" , decode)
        req.user = decode
    }catch(error){
        console.log("Error Token" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Server Internal Error Token",
            error:error.message,
        })
    }
}

module.exports = authMiddlewares