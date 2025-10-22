import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="hero  py-5">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full min-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Enter your valid passord"
                    name="password"
                  />
                  <div>
                    <p>
                      new to our website?{" "}
                      <Link
                        className="text-info hover:underline"
                        to={"/register"}>
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 ">
                    <button className="flex-2 btn  font-semibold bg-indigo-500 text-white">
                      Login
                    </button>
                    <Link
                      to={"/"}
                      className="btn bg-info text-white font-semibold">
                      Back to home
                    </Link>
                  </div>
                </fieldset>
              </form>

              <div className="flex items-center justify-between gap-3">
                <button className="btn bg-white text-black border-[#e5e5e5] flex-1">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <button className="btn bg-[#1A77F2] text-white border-[#005fd8] flex-1">
                  <svg
                    aria-label="Facebook logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path
                      fill="white"
                      d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
                  </svg>
                  Login with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
