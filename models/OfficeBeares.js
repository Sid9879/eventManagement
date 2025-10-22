const mongoose = require('mongoose');

const OfficeBearerSchema = new mongoose.Schema({
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

OfficeBearerSchema.index({name:"text"})
module.exports = mongoose.model('officeBearer',OfficeBearerSchema)
