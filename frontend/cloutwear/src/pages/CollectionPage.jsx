import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    // add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
  });
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          image: { url: "https://picsum.photos/500/500?random=15" },
        },
        {
          _id: 12,
          name: "Product 5",
          price: 190,
          image: { url: "https://picsum.photos/500/500?random=16" },
        },
        {
          _id: 6,
          name: "Product 6",
          price: 140,
          image: { url: "https://picsum.photos/500/500?random=17" },
        },
        {
          _id: 7,
          name: "Product 7",
          price: 120,
          image: { url: "https://picsum.photos/500/500?random=18" },
        },
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSideBar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort options */}
        <SortOptions />

        {/* Products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
