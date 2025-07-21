const {decodedToken} = require('../utils/auth');

async function  adminMiddlewares (req , reply){
    try{
        let token = req.headers['authorization'].split(' ')[1];
        if(!token) return reply.code(401).send({
            statusCode:401,
            message:"Token is Required",
            error:"Unauthorized"
        });
        const decoded =  decodedToken(token);

        if(decoded.roles !== "ADMIN") return reply.code(403).send({
            statusCode:403,
            message:"You are not authorized to access this route",
            error:"Forbidden"
        });

        req.user = decoded;

    }catch(error){
        console.log("Error Token =>" , error );
        return reply.code(500).send({
            statusCode:500,
            message:"Internal Server Error Token ",
            error:error
        })
    }
}

module.exports = adminMiddlewares