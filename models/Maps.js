const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['event management', 'exhibition'],
    required: true,
  },
  eventDate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventDate",
  },
  eventWorkshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eventWorkshop",
  },
  exhibition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exhibition",
  },
  img: [
    {
      name: { type: String },
      url: { type: String, required: true },
    },
  ],
}, { timestamps: true });
MapSchema.index({type:1});
// Compound indexes for common queries
MapSchema.index({ type: 1, eventDate: 1 });        
MapSchema.index({ type: 1, eventWorkshop: 1 });    
MapSchema.index({ type: 1, exhibition: 1 }); 

module.exports = mongoose.model('map', MapSchema);
