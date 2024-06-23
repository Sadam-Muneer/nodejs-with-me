const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "salty", "bitter"],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
