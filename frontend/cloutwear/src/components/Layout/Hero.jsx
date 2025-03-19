import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src=".\src\assets\cloutwear-main.webp"
        alt="cloutwear-main"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

      <div className="absolute inset-0  flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking lighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking lighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldeide shipping.
          </p>
          <Link
            to="#"
            className="bg-white  text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
