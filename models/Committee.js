const mongoose = require('mongoose');

const Committee = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'email is required']
    },
    mobile:{
        type:Number,
        unique:true,
        required:[true,'Contact number is required']
    },
    bio:{
        type:String,
        maxlength:200
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    designation:{
        type:String
    },
    visibility: { type: Boolean, default: true },
    priority: { type: Number, default: 0 },
},{timestamps:true});

Committee.index({name:"text",email:"text"})
module.exports = mongoose.model('committee',Committee);