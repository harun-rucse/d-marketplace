import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductCreate from "./pages/ProductCreate";
import { AccountProvider } from "./context/AccountContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <AccountProvider>
      <div className="w-full h-screen mt-16">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<ProductCreate />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </AccountProvider>
  );
}

export default App;
