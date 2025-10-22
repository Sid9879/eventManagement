const mongoose = require('mongoose');
const HighlightSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['link', 'upload'],
        required: true,
        default: 'link' // Assuming 'Add Youtube Link' is the default view
    },
},{timestamps:true});
HighlightSchema.index({type:"text"})

module.exports = mongoose.model('highlight',HighlightSchema)