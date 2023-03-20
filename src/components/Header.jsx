import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Header() {
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
          <button className="bg-gray-50 hover:bg-gray-300 px-2 md:px-4 py-1 rounded-xl text-gray-700 text-sm md:text-lg font-semibold">
            Connect
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
