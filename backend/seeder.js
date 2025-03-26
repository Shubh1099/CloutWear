const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

//seed data

const seedData = async () => {
  try {
    //clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    //create default admin user

    const createdUser = await User.create({
      name: "Admin",
      email: "admin@Cloutwear.com",
      password: "password@123",
      role: "admin",
    });

    // assign default userid to each product

    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user:userID };
    });

    //insert products into the db

    await Product.insertMany(sampleProducts);
    console.log("Product Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("error seeding the data", error);
    process.exit(1);
  }
};

seedData();
