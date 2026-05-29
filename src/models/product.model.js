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
  category :{
    type : String,
  },
  images : [
    {
      type : String
    }
  ]
});


const ProductModel = new mongoose.model('Product' , ProductSchema)

module.exports = ProductModel