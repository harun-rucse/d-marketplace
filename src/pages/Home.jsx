import React from "react";
import Product from "../components/Product";

function Home() {
  return (
    <div className="flex w-full min-h-[93vh] justify-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pb-20">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
