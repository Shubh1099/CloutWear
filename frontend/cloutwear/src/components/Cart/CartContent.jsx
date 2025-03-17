import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Pant",
      size: "L",
      color: "Black",
      quantity: 1,
      price: 45,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "T-shirt",
      size: "S",
      color: "White",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "T-shirt",
      size: "`XL",
      color: "Green",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "T-shirt",
      size: "L",
      color: "White",
      quantity: 1,
      price: 35,
      image: "https://picsum.photos/200?random=6",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b-1"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded-lg"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Colour: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="cursor-pointer border border-gray-400 rounded px-2 py-1 text-sm font-bold">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="cursor-pointer border border-gray-400 rounded px-2 py-1 text-sm font-bold">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price}</p>
            <button>
              <RiDeleteBin6Line className="h-6 w-6 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
