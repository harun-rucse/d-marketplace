import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="bg-[#041938] max-w-[20rem] min-h-[29rem] rounded overflow-hidden shadow-lg p-4">
      <img
        className="w-full"
        src="https://www.freepnglogos.com/uploads/lamborghini-png/lamborghini-aventador-clipart-look-clip-art-images-31.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex flex-col gap-4">
        <Link to="/products/1" className="font-semibold text-xl text-gray-200">
          {product["_name"]}
        </Link>
        <p className="text-gray-300 text-2xl">{product["_value"]}ETH</p>
        <p className="text-gray-400 text-base">{product["_description"]}</p>
        <button className="bg-[#006cff] text-white px-3 py-2 rounded text-sm font-semibold">
          Buy now
        </button>
      </div>
    </div>
  );
}

export default Product;
