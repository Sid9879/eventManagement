const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
 
  name:{
    type:String,
    required:[true,'Name is required']
  },
  email:{
    type:String,
    required:[true,'Email is required']
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Mark as Resolved",'Resolved','Pending'],
    default:"Pending"
  },
},{timestamps:true});

module.exports = mongoose.model('enquiry',EnquirySchema);
