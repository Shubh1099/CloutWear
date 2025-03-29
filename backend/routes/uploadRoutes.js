const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const router = express.Router();

require("dotenv").config();

// clodinary config

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// multer setup using memory storage

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // function to handle the stream upload to cloudinary

    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        });

        // use streamifier to convert file buffer to stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    // call the streamupload function

    const result = await streamUpload(req.file.buffer);

    //respomd with uploaded image

    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
