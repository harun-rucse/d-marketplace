import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, price, description });
  };

  return (
    <div className="flex w-full min-h-[93vh] justify-center mt-28">
      {/* Product create form */}
      <div className="md:w-[50%] h-[40rem]">
        <form
          className="flex flex-col gap-4 bg-[#041938] p-6 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="bg-[#0e2240] p-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="bg-[#0e2240] p-3 rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              cols="30"
              rows="10"
              className="bg-[#0e2240] p-3 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* Button */}
          <div className="mt-6 flex items-center gap-6">
            <Link
              to="/dashboard"
              className="bg-[#3d9706] px-6 py-2 rounded-md text-white"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-[#1264de] px-6 py-2 rounded-md text-white"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;
