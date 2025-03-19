import React from "react";
import womenscollectionImage from "../../assets/womenscollection.webp";
import menscollectionImage from "../../assets/menscollection.webp";
import { Link } from "react-router";
const GenderCollectionSection = () => {
  return (
    <div className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* women's collection */}
        <div className="relative flex-1">
          <img 
            className="w-full h-[700px] object-cover"
            src={womenscollectionImage}
            alt="womens collection"
          />
          <div className="absolute bg-white bottom-8 left-8 bg0white opacity-90 p-4">
            <h2 className="text-2xl font-bold  text-gray-900 mb-3">
              Women's collection
            </h2>
            <Link
              to="#"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* women's collection */}
        <div className="relative flex-1">
          <img
            className="w-full h-[700px] object-cover"
            src={menscollectionImage}
            alt="womens collection"
          />
          <div className="absolute bg-white bottom-8 left-8 bg0white opacity-90 p-4">
            <h2 className="text-2xl font-bold  text-gray-900 mb-3">
              Men's collection
            </h2>
            <Link
              to="#"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderCollectionSection;
