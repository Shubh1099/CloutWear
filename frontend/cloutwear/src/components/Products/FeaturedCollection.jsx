import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <div className="py-16 px-8 lg:px-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left ">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover high-quality,comfortable clothing that effortlessly blends
            fashion and function,designed to make you look and feel great
            everyday.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop now
          </Link>
        </div>
        {/* right content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
