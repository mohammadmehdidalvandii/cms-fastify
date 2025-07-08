const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true,
    },
    email:{
        type:String,
        format:"email",
        required:true,
    },
    phone:{
        type:Number,
        minLength:11,
        maxLength:11,
        required:true,
    },
    password:{
        type:String,
        minLength:6,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

const model = mongoose.model("Users", schema);

module.exports = model