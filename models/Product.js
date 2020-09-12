const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
  },
  stok: {
    type: Number,
  },
  desc: {
    type: Array,
  },
  spec: {
    type: Array,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
