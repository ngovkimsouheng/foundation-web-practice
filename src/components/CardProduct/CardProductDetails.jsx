import React from "react";
import { useNavigate } from "react-router";
export default function CardProductDetails({
  thumbnail,
  title,
  description,
  price,
  images,
  titles,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mb-6 justify-between items-center">
        {" "}
        <button
          onClick={() => navigate("/")}
          className="text-start cursor-pointer text-[20px] text-blue-600 underline"
        >
          Back
        </button>
        <h1 className="text-3xl text-blue-600 font-semibold text-center ">
          Card Product Details
        </h1>
      </div>
      <div className="rounded-[28px] border border-gray-300 h-[50vh] p-4 ">
        <img src={thumbnail} alt={title} className="h-40 mx-auto mb-4" />
        <h2 className="text-lg font-semibold  mb-2">{title}</h2>
        <p className="text-sm text-gray-800 mb-2 ">{description}</p>
        <p className="text-gray-700 mb-4">${price}</p>
        <div className="flex gap-5 ">
          <img className="w-12 " src={images[0]} alt={titles} />
        </div>
      </div>
    </>
  );
}
