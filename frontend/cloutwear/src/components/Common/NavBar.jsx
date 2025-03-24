import React from "react";
import { Link } from "react-router";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineBars3BottomRight,
} from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setnavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setnavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-2 px-3">
        <div className="flex items-center">
          <img
            src=".\src\assets\Cloutwear(1).png"
            className="w-15 h-15 items-center"
          ></img>

          <Link
            to="/"
            className="cursor-pointertext-black text-2xl font-medium text-center "
          >
            Cloutwear
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-6 text-gray-600">
            <Link
              to="/collections/all"
              className=" hover:text-black  text-sm font-medium uppercase transition-colors "
            >
              Men
            </Link>
            <Link
              to="#"
              className="text-sm font-medium uppercase  hover:text-black transition-colors"
            >
              Women
            </Link>
            <Link
              to="#"
              className="text-sm font-medium uppercase hover:text-black transition-colors"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              className="text-sm font-medium uppercase hover:text-black transition-colors"
            >
              Bottom Wear
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-end">
          <Link to="/admin" className="block bg-black px-2 text-sm text-white">
            Admin
          </Link>
          <Link to="/profile" className="">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>

          <button onClick={toggleCartDrawer} className="relative  ">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
              5
            </span>
          </button>

          <button onClick={toggleNavDrawer} className="relative  md:hidden">
            <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700 hover:text-black" />
          </button>

          <SearchBar />
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* mobile navigation */}

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-400 flex flex-col z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdCloseCircle className="h-6 w-6 text-red-500" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4 ">
            <Link
              to="collections/all"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black transition-colors "
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;

