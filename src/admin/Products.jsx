import React from "react";
import PostComponent from "./PostComponent";
import { Link } from "react-router";

async function Getdata() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default function Products({ productDetails = [] }) {
  // No local state or fetching, all handled in App

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap justify-center">
        {productDetails.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow m-4 w-64">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto mb-4 object-contain cursor-pointer hover:scale-105 transition-transform"
              />
              <h2 className="text-lg font-semibold line-clamp-1 mb-2 cursor-pointer hover:text-blue-600">
                {product.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-gray-700 font-bold mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
