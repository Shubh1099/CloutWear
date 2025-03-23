import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const CheckOut = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState("");
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const cart = {
    products: [
      {
        _id: 1,
        name: "Stylish Jacket",
        color: "Red",
        Size: "M",
        price: 100,
        image: "https://picsum.photos/150?random=1",
      },
      {
        _id: 2,
        name: "Casual Sneakers",
        Size: "42",
        color: "Blue",
        price: 80,
        image: "https://picsum.photos/150?random=2",
      },
      {
        _id: 3,
        name: "Jeans",
        Size: "XL",
        color: "White",
        price: 120,
        image: "https://picsum.photos/150?random=3",
      },
    ],
    totalPrice: 300,
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(1234533);
  };
  const handlePaymentSuccess = (details) => {
    console.log("Payment success", details);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700 ">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay With Paypal</h3>
                <PaypalButton
                  amount={500}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed. Try again.", err)}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right section */}

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div className=" flex items-start justify-between py-2 border-b">
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4 rounded-lg"
                />
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {product.Size} | Colour: {product.color}
                  </p>
                </div>
              </div>
              <div className="text-right text-xl">${product.price}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4 ">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
