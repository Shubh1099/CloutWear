const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/AuthMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @acess Private/Admin

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // referenc eto admin user who created it
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route PUT /api/products/:id
// @description Update an existing product ID
// @access private(admin)

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountedPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    // find product in db

    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountedPrice = discountedPrice || product.discountedPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      //save updated product to db

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/products/:id
// @description Delete a product from db
// @acces private/admin

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// @route GET /api/products
// @description get all products with query filters
// @access public

// router.get("/", async (req, res) => {
//   try {
//     const {
//       collection,
//       size,
//       color,
//       gender,
//       minPrice,
//       maxPrice,
//       sortBy,
//       search,
//       category,
//       material,
//       brand,
//       limit,
//     } = req.query;
//     let query = {};

//    if (collection && collection.toLowerCase() !== "all") {
//      query.collections = collection; // No need for $in
//    }

//     if (category && category.toLocaleLowerCase() !== "all") {
//       query.category = category;
//     }
//     if (material) {
//       query.material = { $in: material.split(",") };
//     }
//     if (color) {
//       query.colors = { $in: [color] };
//     }
//     if (gender) {
//       query.gender = gender;
//     }

//     if (minPrice || maxPrice) {
//       query.price = {};
//       if (minPrice) {
//         query.price.gte = Number(minPrice);
//       }
//       if (maxPrice) {
//         query.price.lte = Number(maxPrice);
//       }
//     }
//     if (search) {
//       query.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }

//     if (size) query.size = { $in: size.split(",") };
//     if (brand) query.brand = { $in: brand.split(",") };

//     // sortby

//     let sort = {};
//     if (sortBy) {
//       switch (sortBy) {
//         case "priceAsc":
//           sort = { price: 1 };
//           break;
//         case "priceDesc":
//           sort = { price: -1 };
//           break;
//         case "popularity":
//           sort = { rating: -1 };
//           break;
//         default:
//           break;
//       }
//     }

//     //fetch

//     let products = await Product.find(query)
//       .sort(sort)
//       .limit(Number(limit) || 0);
//     res.json(products);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Server Error");
//   }
// });
router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    // Initialize an empty query object
    let query = {};

    // Collection filtering
    if (collection && collection.toLowerCase() !== "all") {
      query.collections = { $in: [collection] };
    }

    // Category filtering
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    // Material filtering (support multiple materials)
    if (material) {
      query.material = { $in: material.split(",").map((m) => m.trim()) };
    }

    // Color filtering (case-insensitive, support multiple colors)
    if (color) {
      query.colors = { $in: [new RegExp(color, "i")] };
    }

    // Gender filtering
    if (gender) {
      query.gender = gender;
    }

    // Price range filtering
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // Search filtering (case-insensitive across name and description)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Size filtering (support multiple sizes)
    if (size) {
      query.sizes = { $in: size.split(",").map((s) => s.trim()) };
    }

    // Brand filtering (support multiple brands)
    if (brand) {
      query.brand = { $in: brand.split(",").map((b) => b.trim()) };
    }

    // Sorting logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        case "newest":
          sort = { createdAt: -1 };
          break;
        default:
          break;
      }
    }

    // Fetch products with improved filtering
    let products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0); // Default limit to 20 if not specified

    // Count total matching products for pagination
    const totalProducts = await Product.countDocuments(query);

    res.json({
      products,
      totalProducts,
      limit: Number(limit) || 0,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
});

// @route GET /api/products/best-seller
// description retrieve the products with highest rating
// @access public


router.get("/best-seller", async (req, res) => {
  try {
    const bestSellerProducts = await Product.findOne()
     .sort({ rating: -1 })
     .limit(4);

    res.json(bestSellerProducts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/products/new-arrivals
// @description retrieve latest 8 products creation date
// @access public

router.get("/new-arrivals", async (req, res) => {
  try {
    const newArrivalProducts = await Product.find()
     .sort({ createdAt: -1 })
     .limit(8);

    res.json(newArrivalProducts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/products/:id
// @description get a single product by id
// @access public

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/products/similar/:id
// description retrieve similar products on the basis of  product gender & category
// @access public

router.get("/similar/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { gender, category } = product;

    const similarProducts = await Product.find({
      gender: product.gender,
      category: product.category,
      _id: { $ne: req.params.id },
    }).limit(4);

    res.json(similarProducts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
