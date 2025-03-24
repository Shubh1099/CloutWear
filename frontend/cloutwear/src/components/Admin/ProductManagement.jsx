import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 12345,
      name: "Product 1",
      price: 19.49,
      sku: "123123",
    },
    {
      _id: 12346,
      name: "Product 2",
      price: 29.99,
      sku: "123123",
    },
    {
      _id: 12347,
      name: "Product 3",
      price: 9.0,
      sku: "123123",
    },
  ];

  const handleDelete = (id) => {
    // Your delete logic here
    // Example: fetch(`api/products/${id}`, { method: 'DELETE' });

    if (window.confirm("Are you sure to delete the product?")) {
      console.log(`Deleted product with ID: ${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">${product.price.toFixed(2)}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link to={`/admin/products/${product._id}/edit`}>
                      <button className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-3 py-1 text-sm font-medium text-white ml-2 bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
