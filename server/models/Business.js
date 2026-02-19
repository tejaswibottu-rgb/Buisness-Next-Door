const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  category: String,
  imageUrl: String,
  rating: Number,
  reviews: Number,
  description: String,
  address: String,
  phone: String,
  website: String,
  deal: Boolean,
  discount: Number,
  createdAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);
