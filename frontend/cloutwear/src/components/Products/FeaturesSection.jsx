import React from "react";
import { HiShoppingBag, HiOutlineCreditCard } from "react-icons/hi";
import { HiArrowPath } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-3xl " />
          </div>
          <h4 className="tracking-tighter mb-2">
            {" "}
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $110.00
          </p>
        </div>
        {/* feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPath className="text-3xl " />
          </div>
          <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarantee
          </p>
        </div>
        {/* feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-3xl " />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secure checkoput process
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
