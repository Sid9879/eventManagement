const mongoose = require('mongoose');

const EventDate = new mongoose.Schema({
    
    eventDate:{
        type:String,
        required:true
    }

},{timestamps:true});
EventDate.index({eventDate:"text"})
module.exports = mongoose.model('eventDate',EventDate);
