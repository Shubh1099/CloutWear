const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/AuthMiddleware");
const router = express.Router();

// @route GET /api/admin/users
// @description get all users (Admin only)
// @access private/admin

router.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/admin/users
// @description add new users (Admin only)
// @access private/admin

router.post("/users", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({ name, email, password, role: role || "customer" });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT /api/admin/users
// @description update user info (Admin only)
// @access private/admin

router.put("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.role = req.body.role || user.role;
    }

    const updatedUser = await user.save();
    res.json({ message: "User updated successfully" , updatedUser});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/admin/users
// @description add new users (Admin only)
// @access private/admin

router.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.deleteOne();
    res.json({ message: "User removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
