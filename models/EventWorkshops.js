const mongoose = require('mongoose');
const EventWorkshopSchema = new mongoose.Schema({
     
    eventDate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"eventDate",
        required:[true,'Event Date is required'],
    },
    time:{
        type:String,
        required:[true,'Time is required']
    },
    title:{
        type:String,
        required:[true,'Title is required']
    },
    hallNo:{
     type:String,
     required:[true,'Hall no. is required']
    }
},{timestamps:true});
EventWorkshopSchema.index({title:"text"});
EventWorkshopSchema.index({eventDate:1});

module.exports = mongoose.model('eventWorkshop',EventWorkshopSchema);