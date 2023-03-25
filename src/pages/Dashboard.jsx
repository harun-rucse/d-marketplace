import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import useContract from "../hooks/useContract";
import { useAccount } from "../context/AccountContext";

const CardItem = ({ title, value }) => {
  return (
    <div className="flex flex-col w-[20rem] gap-6 bg-[#0e2240] p-8 rounded-lg shadow-2xl">
      <p className="text-2xl">{title}</p>
      <span className="text-3xl">{value}</span>
    </div>
  );
};

function Dashboard() {
  const { contract } = useContract();
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [totalOrders, setTotalOrders] = React.useState(0);

  const accountCtx = useAccount();
  const account = accountCtx.account;

  const getTotalNumberOfProducts = async () => {
    try {
      const totalSells = await contract.methods.totalSells().call();
      setTotalProducts(totalSells);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalOrders = async () => {
    // console.log(contract, account);
    if (contract && account) {
      // console.log("here");
      try {
        const orders = await contract.methods.boughtProducts(account).call();
        setTotalOrders(orders.length);
        console.log(orders);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(
    () => {
      getTotalNumberOfProducts();
    },
    [account],
    totalProducts
  );
  useEffect(() => {
    getTotalOrders();
  }, [totalProducts, account]);
  return (
    <div className="flex w-full min-h-[93vh]">
      <div className="flex flex-col md:flex-row w-full">
        {/* left sidebar */}
        <div className="w-full md:w-[20%] bg-[#041938]">
          <div className="flex md:flex-col w-full h-full">
            <Link to="/dashboard" className="p-4 bg-[#0e2240]">
              Dashboard
            </Link>
            <Link to="/dashboard/products" className="p-4">
              New Products
            </Link>
          </div>
        </div>
        {/* Main content */}
        <div className="w-full p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <CardItem title="Total Products" value={totalProducts} />
            <CardItem title="Total Orders" value={totalOrders} />
            <CardItem title="Total Revenue" value="100" />
          </div>
          <button className="bg-[#006cff] px-4 py-3 rounded mt-6">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
