import React from "react";
import { Link } from "react-router";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";




const Footer = () => {
  return (
    <footer className="border-t px-14 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletters</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about our products,exclusive events and online
            offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off on your first order.
          </p>
          {/* newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className=" p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all "
              required
            />
            <button
              type="submit"
              className=" py-3 w-40  text-sm bg-black text-white rounded-r-md hover:bg-gray-800  focus:ring-gray-500 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
        {/* shop links  */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>

          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="#" className=" hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>

          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="#" className=" hover:text-gray-500 transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-2">Follow us</h3>
          <div className="flex  items-center space-x-4 mb-6">
            <a
              href="https://meta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <TbBrandMeta className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <IoLogoInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-800 text-lg mb-2">Call us</p>
          <p>
            <FiPhoneCall className="inline-block w-5 h-5 mr-2" />
            0123-456-789
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">© 2025,Shubhmne.All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
