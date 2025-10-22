const mongoose = require('mongoose');
const AboutSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:['aboutUs','aboutCity'],
        required:true
    },
    title:{
        type:String,
        // required:true
    },

    description:{
    type:String,
    // required:true
  },
     img: [
    {
      name: { type: String },
      url: { type: String, required: true },
    },
  ],
  
},{timestamps:true});
AboutSchema.index({type:1});
module.exports = mongoose.model('about',AboutSchema);