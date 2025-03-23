import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import {useNavigate}  from "react-router-dom"
const CardDrawer = ({ drawerOpen, toggleCartDrawer }) => {

  const navigate = useNavigate()
  const handleCheckout =( )=>{
    toggleCartDrawer()
    navigate("/checkout")
  }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-400 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/*close button*/}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdCloseCircle className="h-6 w-6 text-red-500" />
        </button>
      </div>
      {/* cart items */}
      <div className="flex-grow p-4 overflow-y-auto ">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {/* Component of cart */}
        <CartContent />
      </div>
      {/* Checkout Button at bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 text-lg transition">
          Checkout
        </button>
        <p className="text-sm tracking-lighter text-gray-500 mt-2 text-center">
          Shipping,taxes and discount coupons calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CardDrawer;
