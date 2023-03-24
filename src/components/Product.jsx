import React from "react";
import { Link } from "react-router-dom";

function Product({ product,id}) {
  return (
    <div className="bg-[#041938] max-w-[20rem] h-[29rem] rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between ">
      <Link to={`/products/${id}`} className="div">
        <img
          className="w-full"
          src="https://www.freepnglogos.com/uploads/lamborghini-png/lamborghini-aventador-clipart-look-clip-art-images-31.png"
          alt="Sunset in the mountains"
        />
      </Link>
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="font-semibold text-xl text-gray-200">
          {product["_name"]}
        </div>
        <p className="text-gray-300 text-2xl">{product["_value"]}ETH</p>
        <p className="text-gray-400 text-base">{product["_description"]}</p>
        <button className="bg-[#006cff] text-white px-3 py-2 rounded text-sm font-semibold hover:scale-105 transition-all duration-300">
          Buy now
        </button>
      </div>
    </div>
  );
}

export default Product;
