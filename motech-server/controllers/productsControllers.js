const Product = require("../models/Products");
module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("product created successfully");
    } catch (e) {}
    res.status(500).json("failed to get the products");
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createAt: -1 });
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json("failed to get the products");
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json("failed to get the products");
    }
  },
  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "motech",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json("failed to get the products");
    }
  },
};
