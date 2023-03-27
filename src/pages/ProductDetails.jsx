import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import { useAccount } from "../context/AccountContext";
import useContract from "../hooks/useContract";
import useBuycontract from "../hooks/useBuycontract";
import { toast } from "react-toastify";
import img1 from "../assets/1.png";
import Loader from "../components/Loader";

function ProductDetails() {
  const accountCtx = useAccount();

  const params = useParams();
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [boughtUri, setBoughtUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const { contract } = useContract();
  const { buy } = useBuycontract();

  // get the product
  const getProduct = async () => {
    try {
      setLoading(true);
      const product = await contract.methods.getContract(productId).call();

      product["_value"] = Web3.utils.fromWei(product["_value"], "ether");
      product[2] = Web3.utils.fromWei(product[2], "ether");
      // console.log(product);
      setProduct(product);
    } catch (er) {
      // console.log(er);
    }
    setLoading(false);
  };

  useEffect(() => {
    setProductId(params.id);
  }, [params.id]);

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProductBoughtUriHandler = async () => {
    try {
      const result = await contract.methods
        .showBoughtURI(productId)
        .call({ from: accountCtx.account });
      setBoughtUri(result);
      // console.log(result);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getProductBoughtUriHandler();
  }, [product, accountCtx.account]);

  const productBuyHandler = async () => {
    try {
      const success = await buy(
        accountCtx.account,
        contract,
        product,
        productId
      );
      toast.success("Product bought successfully");
    } catch (error) {
      if (error.code && error.code === 4001) {
        toast.error("transaction failed! " + error.message);
      } else {
        toast.error("please connect metamask");
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col w-full min-h-[93vh] px-6 md:px-32 mt-24">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[40%]">
          <img src={img1} alt="" className="h-full object-contain" />
        </div>
        <div className="flex md:w-1/2 flex-col gap-6">
          <h1 className="text-2xl md:text-3xl text-gray-200 font-semibold border-b border-gray-700 pb-4">
            {product && product["_name"]}
          </h1>
          <p className="text-gray-300 text-2xl md:text-4xl border-b border-gray-700 pb-4">
            Price: {product && product["_value"]} ETH
          </p>
          <button
            onClick={() => productBuyHandler(productId)}
            className="bg-[#006cff] md:w-[40%] text-white px-3 py-3 rounded text-sm font-semibold mt-10 hover:scale-105 transition-all duratoin-300"
          >
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
          {product && product["_description"]}
        </p>
        <p className="text-gray-400 md:text-xl mt-4">{boughtUri}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
