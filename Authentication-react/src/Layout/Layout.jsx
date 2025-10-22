import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
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

export default Layout;
