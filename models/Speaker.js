const mongoose = require("mongoose");

const Speaker = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["National Speaker", "International Speaker", "Speaker"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    sessionName: {
      type: String,
      required: [true, "Session Name is required"],
    },
    hallNo: {
      type: String,
      required: [true, "hall no. is required"],
    },
    sessions: [
      {
        session: {
          type: String,
        },
        brief: {
          type: String,
        },
      },
    ],
    visibility: { type: Boolean, default: true },
    priority: { type: Number, default: 0 },
    
  },
  { timestamps: true }
);
Speaker.index({name:"text"});
Speaker.index({type:1});


module.exports = mongoose.model("speaker", Speaker);
