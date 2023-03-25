import React from "react";
import { Link } from "react-router-dom";
import { useAccount } from "../context/AccountContext";
import Web3 from "web3";
import useContract from "../hooks/useContract";
import useBuycontract from "../hooks/useBuycontract";
import { toast } from "react-toastify";

function Product({ product, id }) {
  const accountCtx = useAccount();
  const { contract } = useContract();
  const { buy } = useBuycontract();

  const productBuyHandler = async () => {
    try {
      const success = await buy(accountCtx.account, contract, product, id);
      toast.success("Product bought successfully");
    } catch (error) {
      // console.log(error);
      if (error.code && error.code === 4001) {
        toast.error("transaction failed! " + error.message);
      }else{
        toast.error("please connect metamask");
      }
    }
  };
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
        <button
          onClick={productBuyHandler}
          className="bg-[#006cff] text-white px-3 py-2 rounded text-sm font-semibold hover:scale-105 transition-all duration-300"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export default Product;
