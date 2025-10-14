import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navber/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
