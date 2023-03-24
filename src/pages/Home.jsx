import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Web3 from "web3";
import useContract from "../hooks/useContract";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const { contract } = useContract();
    const getProducts = async () => {
      const products = [];
      try {
        const totalSells = await contract.methods.totalSells().call();
        for (let i = 0; i < totalSells; i++) {
          const product = await contract.methods.getContract(i).call();
          product["_value"] = Web3.utils.fromWei(product[2], "ether");
          product[2] = Web3.utils.fromWei(product[2], "ether");
          products.push(product);
        }
      } catch (err) {
        console.log(err);
      }
      // console.log(products[0]);
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div className="flex w-full min-h-[93vh] justify-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pb-20">
        {products.map((product, index) => {
          return <Product key={index} product={product} id={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
