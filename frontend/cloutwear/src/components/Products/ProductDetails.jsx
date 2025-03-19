// /* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import ProductGrid from "./ProductGrid";

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    image: { url: "https://picsum.photos/500/500?random=10" },
  },
  {
    _id: 2,
    name: "Product 2",
    price: 190,
    image: { url: "https://picsum.photos/500/500?random=11" },
  },
  {
    _id: 3,
    name: "Product 3",
    price: 140,
    image: { url: "https://picsum.photos/500/500?random=12" },
  },
  {
    _id: 4,
    name: "Product 4",
    price: 120,
    image: { url: "https://picsum.photos/500/500?random=13" },
  },
  
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const Products = {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. ",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Cyan"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/750?random=40",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/750?random=20",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  };

  useEffect(() => {
    if (Products?.images?.length > 0) {
      setMainImage(Products.images[0].url);
    }
  }, []); // Only run once on component mount

  const handleThumbnailClick = (url) => {
    console.log("Thumbnail clicked:", url);
    setMainImage(url);
  };

  const incrementQuantity = () => {
    if (quantity < Products.countInStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    if (!selectedColour || !selectedSize) {
      toast.error("Please select size and color before adding to cart");
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
        autoClose: true,
      });
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        {/* left thumbnails */}

        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {Products.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.altText || `Thumbnail ${index}`}
                className={`size-20 object-cover rounded-lg cursor-pointer  ${
                  mainImage === img.url ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleThumbnailClick(img.url)}
              />
            ))}
          </div>

          {/* main image */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                className="w-full h-auto rounded-xl object-cover border"
                src={mainImage}
                alt="Main product view"
              />
            </div>
          </div>

          {/* mobile thumbnail */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {Products.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.altText || `Thumbnail ${index}`}
                className={`size-20 object-cover rounded-lg cursor-pointer ${
                  mainImage === img.url ? "border-3 border-blue-500" : ""
                }`}
                onClick={() => handleThumbnailClick(img.url)}
              />
            ))}
          </div>
          {/* right section */}

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {Products.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              $ {Products.price && `${Products.price}`}
            </p>
            <p className="text-xl text-gray-500 mb-2 ">
              ${Products.discountPrice}
            </p>
            <p className="text-gray-600 mb-4">{Products.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {Products.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColour(color)}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColour == color
                        ? "border-2 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {Products.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-1 rounded border ${
                      selectedSize == size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-2 text-black">Brand:</td>
                    <td className="p-2 text-gray-600">{Products.brand}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-black">Material:</td>
                    <td className="p-2 text-gray-600">{Products.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-3">
            You may also like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
