/* eslint-disable no-unused-vars */
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

const NewArrivals = () => {
  const scrollref = useRef(null);
  const [ScrollLeft, setScrollLeft] = useState(false);
  const [CanScrollLeft, setCanScrollLeft] = useState(false);
  const [CanScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      Price: 120,
      image: {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      Price: 125,
      image: {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      Price: 220,
      image: {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      Price: 120,
      image: {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      Price: 90,
      image: {
        url: "https://picsum.photos/seed/500/500?random=5",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      Price: 150,
      image: {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Jacket",
      },
    },

    {
      _id: "7",
      name: "Stylish Jacket",
      Price: 100,
      image: {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket",
      },
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      Price: 135,
      image: {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Jacket",
      },
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollref.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollref.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollRight(
        container.scrollWidth - container.clientWidth > container.scrollLeft
      );
       setScrollLeft(container.scrollLeft > 0);
      // setCanScrollLeft(container.ScrollLeft > 0);
      setCanScrollRight(rightScrollable);
    }
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWdth,
    // });
  };

  useEffect(() => {
    const container = scrollref.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return ()=>{
        container.removeEventListener("scroll", updateScrollButtons);
      }
    }
  },[]);

  return (
    <div className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 realative">
        <h2 className="text-3xl font-bold mb-4">Explore new Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway,freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        {/* scroll buttons */}
        <div className="relative w-full h-1">
          <div className="absolute right-0 bottom-0 flex space-x-2">
            <button
              onClick={() => {
                scroll("left");
              }}
              disabled={CanScrollLeft}
              className={`p-1 rounded-3xl border ${
                CanScrollLeft
                  ? " bg-gray-200 text-gray-400 "
                  : "bg-white text-black hover:bg-gray-300 "
              }`}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => {
                scroll("right");
              }}
              className={`p-1 rounded-3xl border ${
                CanScrollRight
                  ? " bg-white text-black hover:bg-gray-300"
                  : "bg-gray-200 text-gray-400 "
              }`}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* scrollable content */}
      <div
        ref={scrollref}
        className="container mx-auto overflow-x-scroll  flex space-x-6 relative"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image?.url}
              alt={product.image?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0  left-0 right-0  backdrop-blur-md text-white p-4 ">
              <Link
                to={`/product/${product._id}`}
                className=" flex flex-col items-start"
              >
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.Price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
