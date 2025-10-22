const mongoose = require("mongoose");
const FinalPageSchema = new mongoose.Schema({
  eventDate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventDate",
    required: [true, "Event Date is required"],
  },
  eventWorkshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventWorkshop",
    required: [true, "Event WorkShop is required"],
  },
  programCard: {
    time: {
      type: String,
      required: [true, "Title is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    hallNo: {
      type: String,
      required: [true, "Hall no. is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    speaker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "speaker",
    },
  },

  link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "library",
  },
  document: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "library",
  },
},{timestamps:true});
FinalPageSchema.index({eventDate:1})
FinalPageSchema.index({eventWorkshop:1})
module.exports = mongoose.model('finalPage',FinalPageSchema);
