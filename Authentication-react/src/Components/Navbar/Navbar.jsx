import React from "react";
import Container from "../Container";
import { AiOutlineMenuFold } from "react-icons/ai";
import { NavLink } from "react-router";

const Navbar = () => {
  const NavLinks = (
    <>
      <div className="flex items-center gap-10 font-semibold text-lg">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </>
  );
  return (
    <>
      <div className=" shadow-md bg-white">
        <Container>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden">
                  <AiOutlineMenuFold size={20} />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {NavLinks}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
