const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// CREATING SCHEMA..
const ItemSchema = new Schema({
  employee: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
