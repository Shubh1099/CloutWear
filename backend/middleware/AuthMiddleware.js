const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id).select("-password"); // exclude password
      next();
    } catch (err) {
      console.error("Token verification failed!", err);
      return res.status(401).json({ message: "Token is not valid" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided!" });
  }
};

// middleware for checking if user is admin

const admin = function (req, res,next) {
  if (req.user.role === "admin" && req.user) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "User is not authorized to perform this action" });
  }
};

module.exports = { protect,admin };
