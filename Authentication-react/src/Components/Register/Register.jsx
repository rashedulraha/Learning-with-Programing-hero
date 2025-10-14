import React from "react";
import Container from "../Container";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <Container>
        <div className="hero  min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Register </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <p className="link link-hover ">
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        className="text-blue-500 hover:text-blue-700">
                        Login
                      </Link>
                    </p>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
