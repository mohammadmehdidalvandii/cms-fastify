const mongoose = require('mongoose')

const connectToDB =async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            console.log("Using existing connection");
            return true
        }{
            const connection = await mongoose.connect('mongodb://localhost:27017/cms-fastify',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
            if(connection){
                console.log("Connected to MongoDB successfully ✅");
                return true
            }
        }
    }catch(error){
        console.log("DateBase connection failed");
        process.exit(1)
    }
}

module.exports = connectToDB;