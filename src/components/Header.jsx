import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useAccountDispatch, useAccount } from "../context/AccountContext";
import { toast } from "react-toastify";

function Header() {
  const dispatch = useAccountDispatch();
  const account = useAccount();
  const connect = async () => {
    if (window.ethereum) {
      // connect to metamask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      dispatch({ type: "SET_ACCOUNT", payload: account });
    } else {
      toast.info("Metamask not found");
    }
  };

  //handle account change from metamask
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        // console.log(accounts);
        if (accounts.length > 0) {
          dispatch({ type: "SET_ACCOUNT", payload: accounts[0] });
        } else {
          dispatch({ type: "SET_ACCOUNT", payload: null });
        }
      });
    } else {
      toast.info("Metamask not found");
    }
  }, []);

  return (
    <header className="fixed w-full top-0 flex justify-center py-3 bg-[#006cff] shadow-lg">
      <div className="flex px-3 md:px-0 md:w-4/5 gap-6 md:gap-0 items-center justify-between">
        <Link
          to="/"
          className="md:hidden text-base md:text-2xl font-semibold text-gray-200"
        >
          D-Marketplace
        </Link>
        <Link
          to="/"
          className="hidden md:block text-base md:text-2xl font-semibold text-gray-200"
        >
          Decentralized Marketplace
        </Link>
        <div className="flex items-center gap-4">
          <button
            className="bg-gray-50 hover:bg-gray-300 px-2 md:px-4 py-1 rounded-xl text-gray-700 text-sm md:text-lg font-semibold"
            onClick={connect}
            disabled={account.account}
          >
            {account.account
              ? account.account.substring(0, 4) +
                "***" +
                account.account.substring(
                  account.account.length - 4,
                  account.account.length
                )
              : "Connect"}
            <BsArrowRight className="inline-block ml-2" />
          </button>
          <Link
            to="/dashboard"
            className="bg-gray-900 hover:bg-gray-800 px-2 md:px-4 py-1 rounded-xl text-gray-300 text-sm md:text-lg font-semibold"
          >
            Admin
            <BsArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
