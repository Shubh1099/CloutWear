const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

// Helper function to get a cart by user Id or guest ID

const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

// @route POST /api/cart
// @description add product into cart for a guest or loged in user
// @access public

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // determine whether user is logged in or guest
    let cart = await getCart(userId, guestId);

    // if a cart exists, update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );
      if (productIndex > -1) {
        //if product already exists, update
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          // add new product
          productId,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity,
          size,
          color,
        });
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => (acc += item.price * quantity),
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            quantity,
            size,
            color,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/cart
// @description update prdouct quantity in the cart for a guest or logged in user
// @access public

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if (productIndex > -1) {
      // update product quantity in the cart
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1); // remove product if quantity is zero
      }
      cart.totalPrice = cart.products.reduce(
        (acc, item) => (acc += item.price * quantity),
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route delete /api/cart
// @description remove a product from cart
// @access public

router.delete("/", async (request, res) => {
  const { productId, size, color, guestId, userId } = request.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1); // remove product from the cart
      cart.totalPrice = cart.products.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route  /api/cart
// @description get logged-in user/guest user's cart
// @access public

router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;
  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route  /api/cart/merge
// @description merge guest cart into user cart on login
// @access Private

router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;
  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (!guestCart) {
      return userCart
        ? res.status(200).json(userCart)
        : res.status(404).json({ message: "No cart found" });
    }

    if (guestCart.products.length === 0) {
      return res.status(400).json({ message: "Guest cart is empty" });
    }

    if (userCart) {
      // Merge products
      guestCart.products.forEach((guestItem) => {
        const existingProductIndex = userCart.products.findIndex(
          (item) =>
            item.productId.toString() === guestItem.productId.toString() &&
            item.size === guestItem.size &&
            item.color === guestItem.color
        );

        if (existingProductIndex > -1) {
          // Update quantity if product exists
          userCart.products[existingProductIndex].quantity +=
            guestItem.quantity;
        } else {
          // Add new product to cart
          userCart.products.push(guestItem);
        }
      });

      // Recalculate total price
      userCart.totalPrice = userCart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await userCart.save();

      // Remove guest cart
      await Cart.findOneAndDelete({ guestId });

      return res.status(200).json(userCart);
    } else {
      // If no user cart exists, convert guest cart to user cart
      guestCart.user = req.user._id;
      guestCart.guestId = undefined;
      await guestCart.save();

      return res.status(200).json(guestCart);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
