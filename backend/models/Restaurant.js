const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: String,
  type: { type: String, enum: ['Veg', 'Non-Veg', 'Both'] },
  rating: Number,
  deliveryTime: String,
  location: String,
  image: String,
  menu: [{
    id: Number,
    name: String,
    price: Number,
    desc: String,
    type: { type: String, enum: ['Veg', 'Non-Veg'] }
  }],
  isOpen: { type: Boolean, default: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);