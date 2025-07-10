const {sign , verify} = require('jsonwebtoken');
const {hash , compare} = require('bcryptjs');

const hashedPassword = async (password)=>{
    const hashPassword = await hash(password , 10);
    return hashPassword
}

const comparePassword = async(password , hashedPassword)=>{
    const isValidPassword = await compare(password , hashedPassword);
    return isValidPassword
}

const generateToken = (data)=>{
    const secretToken = process.env.TOKEN;
    if(!secretToken) throw new Error("Access Token is not Define");
    const token = sign(data ,  secretToken , {expiresIn:'1h'});
    return token
}

const decodedToken = (token)=>{
    const secretToken = process.env.TOKEN;
    if(!secretToken) throw new Error("Access Token is not Define");
    const decoded = verify(token , secretToken);
    return decoded;
}

module.exports = {
    hashedPassword,
    comparePassword,
    generateToken,
    decodedToken
}