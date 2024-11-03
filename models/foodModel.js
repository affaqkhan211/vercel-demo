// models/foodModel.js

import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  foodTitle: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
