import React from "react";

function ProductDetails() {
  return (
    <div className="flex flex-col w-full min-h-[93vh] px-6 md:px-32 mt-24">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[40%]">
          <img
            src="https://www.freepnglogos.com/uploads/lamborghini-png/lamborghini-aventador-clipart-look-clip-art-images-31.png"
            alt=""
            className="w-full object-contain"
          />
        </div>
        <div className="flex md:w-1/2 flex-col gap-6">
          <h1 className="text-2xl md:text-3xl text-gray-200 font-semibold border-b border-gray-700 pb-4">
            Lamborghini Aventador
          </h1>
          <p className="text-gray-300 text-2xl md:text-4xl border-b border-gray-700 pb-4">
            Price: $10 ETH
          </p>
          <button className="bg-[#006cff] md:w-[40%] text-white px-3 py-3 rounded text-sm font-semibold mt-10">
            Buy now
          </button>
        </div>
      </div>
      {/* product description */}
      <div className="my-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Product Description
        </h1>
        <p className="text-gray-400 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
          recusandae nulla aperiam beatae cumque fugiat sit suscipit fuga! Quia.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
