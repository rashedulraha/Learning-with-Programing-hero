import React from "react";

import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center gap-10 justify-center py-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/FormInput"}>Form Input</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </>
  );
};

export default Navbar;
