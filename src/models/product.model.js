const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      enum: ["INR", "USD"],
    },
  },
});


const ProductModel = new mongoose.model('Product' , ProductSchema)

module.exports = ProductModel