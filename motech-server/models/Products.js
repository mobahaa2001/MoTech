const mongoose = require("mongoose");

const ProductsShema = new mongoose.Schema({
  title: { type: String, required: true },
  supplier: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  product_location: { type: String, required: true },
});

module.export = mongoose.model("Product", ProductsShema);
