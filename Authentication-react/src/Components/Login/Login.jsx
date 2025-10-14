import React from "react";
import Container from "../Container";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <Container>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form>
                  <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                    {/* password */}
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <div>
                      <p className="link link-hover ">
                        Create an account?{" "}
                        <Link
                          to={"/register"}
                          className="text-blue-500 hover:text-blue-700">
                          register
                        </Link>
                      </p>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
