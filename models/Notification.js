const mongoose = require("mongoose");

const Notification = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
  document:{
   type:String,
  },
  visible:{
    type:Boolean,
    default:true
  }
},{timestamps:true});
// Notification.index({visible:"text"});
Notification.index({visible:1});
module.exports = mongoose.model('notification',Notification);
