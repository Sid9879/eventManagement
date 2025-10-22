const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    Description:{
        type:String,
        required:[true,'Description is required']
    }
},{timestamps:true});
NotesSchema.index({title:"text"})
module.exports = mongoose.model('notes',NotesSchema);