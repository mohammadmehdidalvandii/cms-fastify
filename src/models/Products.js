const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    subTitle:{
        type:String,
        required:true,
    },
    tags:{
        type:[String],
        required:true,
    },
},{
    timestamps:true
});

const model = mongoose.model("Products" , schema);
module.exports = model;