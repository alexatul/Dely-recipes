import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar/Navbar";

function LayoutPages() {
  return (
    <div>
      <Navbar position="relative" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutPages;
