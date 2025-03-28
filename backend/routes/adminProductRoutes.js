const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/AuthMiddleware");
const router = express.Router();

// @route GET /api/admin/products
// @description get all products (Admin only)
// @access private/admin

router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports=router