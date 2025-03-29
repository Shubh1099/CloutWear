const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");
const Order = require("../models/Order");

// @route GET /api/admin/orders
// @description get all orders (Admin only)
// @access private/admin

router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT /api/admin/orders/:id
// @description update order status (Admin only)
// @access private/admin

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/admin/orders/:id
// @description delete an order (Admin only)
// @access private/admin

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json({ message: "Order removed" });
    }
    else{
      res.status(404).json({ message: "Order not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
