const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    material:{
        type:[String],
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    // image:{
    //     type:String,
    //     required:true,
    // }
},{
    timestamps:true,
});

const model = mongoose.model("Foods", schema);

module.exports = model;