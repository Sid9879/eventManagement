const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    feedbacks: [
      {
        item: {
          type: String,
          enum: ["registration", "accommodation", "food", "venue", "organization"],
          required: true
        },
        rating: { type: Number, required: true, min: 1, max: 5 }
      }
    ],
    description: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', FeedbackSchema);
