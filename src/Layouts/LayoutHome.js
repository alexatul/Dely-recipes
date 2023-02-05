import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import "./LayoutHome.css";

function LayoutHome() {
  return (
    <>
      <div className="layout-home">
        <div>
          <Navbar position="absolute" />
          <Hero />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LayoutHome;
