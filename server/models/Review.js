const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  businessId: { type: Number, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
