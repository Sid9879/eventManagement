const mongoose = require('mongoose');
const eventFeedback = new mongoose.Schema({
     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
          required: true
        },
        event:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'finalPage',
            required:true
        },
         feedbacks: [
      {
        item: {
          type: String,
          enum: ["session", "speaker"],
          required: true
        },
        rating: { type: Number, required: true, min: 1, max: 5 }
      }
    ],
    description: { type: String }
},{timestamps:true});
module.exports = mongoose.model('eventfeedback',eventFeedback);