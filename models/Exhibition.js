const mongoose = require('mongoose');

const Exhibition = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    type:{
        type:String,
        enum:['Book Exhibition']
    },
    BoothNo:{
        type:String
    },
    sponsored:{
        type:Boolean,
        required:true
    }
},{timestamps:true});

Exhibition.index({name:"text"});
Exhibition.index({sponsored:1})
module.exports = mongoose.model('exhibition',Exhibition);