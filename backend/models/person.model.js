const mongoose = require("mongoose");

// Define the Person schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
  },
  address: {
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
  },
  role: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Create persons model
const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;
