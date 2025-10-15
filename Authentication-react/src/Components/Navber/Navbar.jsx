import React, { useContext } from "react";
import "../../index.css";
import { Link, NavLink } from "react-router";
import Container from "../Container";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const navLink = (
    <>
      <div className="flex flex-col md:flex-row  items-center space-x-5 font-semibold text-lg text-zinc-700">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"register"}>Register</NavLink>
        <NavLink to={"login"}>Login</NavLink>
      </div>
    </>
  );

  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <Container>
          {" "}
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {navLink}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navLink}</ul>
            </div>
            <div className="navbar-end">
              {user ? (
                <a className="btn">SingOut</a>
              ) : (
                <Link className="btn">Signin</Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
