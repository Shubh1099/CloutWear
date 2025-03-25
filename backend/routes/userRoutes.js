const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {protect}=require("../middleware/AuthMiddleware")

const router = express.Router();

// @route POST /api/users/register
// @description register a new user
// @access public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json("Email already exists");
    }

    user = new User({ name, email, password });
    await user.save();

    // create jwt

    const payload = { user: { id: user._id, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 }, // 1 hour
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          token,
          user: { id: user._id, name: user.name, role: user.role },
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
});

// @route POST /api/users/login
// @description authenticate and login user
// @access public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Invalid credentials");

    const payload = { user: { id: user._id, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '300h' }, 
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: { id: user._id, name: user.name, role: user.role },
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route POST /api/users/profile
// @description get logged in user's profile
// @access private

router.get("/profile", protect, async (req, res) => {
 res.json(req.user)
});

module.exports = router;
