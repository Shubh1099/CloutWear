import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New york", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },

        {
          _id: "12288",
          createdAt: new Date(),
          shippingAddress: { city: "Washington DC", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 150,
          isPaid: false,
        },
        {
          _id: "12222",
          createdAt: new Date(),
          shippingAddress: { city: "San Andreas", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 120,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    console.log(`Order ID clicked: ${orderId}`);
    // Navigate to order details page with the selected order ID
    navigate(`/order/${orderId}`)
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  onClick={()=>{
                    handleRowClick(order._id)
                  }}
                  key={order._id}
                  className="hover:border-gray-50 cursor-pointer"
                >
                  <td className="py--2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg "
                    ></img>
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-900 whitespace-nowrap">
                    {order.createdAt.toLocaleDateString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 whitespace-nowrap">
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 whitespace-nowrap">
                    {order.orderItems.map((item) => item.name).join(", ")}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      } px-4 py-2 rounded-full tetx-xs sm:text-sm`}
                    >
                      {" "}
                      {order.isPaid == true ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
