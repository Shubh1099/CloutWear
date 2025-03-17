import React from "react";
import { FaMeta } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="bg-rabbit-red">
      <div className="container mx-auto flex justify-between items-center px-3 py-2">
        <div className="hidden md:flex items-center space-x-4 pr-2 text-white">
          <a href="https://www.meta.com">
            <FaMeta className="h-5 w-5  hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com" className="">
            <IoLogoInstagram className="h-5 w-5  hover:text-gray-400" />
          </a>
          <a href="https://www.x.com" className="">
            <RiTwitterXLine className="h-4 w-4 hover:text-gray-400" />
          </a>
        </div>

        <div className="text-sm text-center text-white inter-font flex-grow">
          <span>We ship Worldwide - Fast and Reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a
            href="tel:+1234567890"
            className="text-white hover:text-gray-400"
            style={{ color: "white" }}
          >
            +1 (234) 567890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
