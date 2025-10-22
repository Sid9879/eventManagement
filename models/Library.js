const mongoose = require('mongoose');

const Library = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    url:{
        type:String
    },
    type: {
        type: String,
        enum: ['link', 'document'],
        required: true,
        default: 'link'
    },
},{timestamps:true});

Library.index({name:"text"});
Library.index({type:1});


module.exports = mongoose.model('library',Library);