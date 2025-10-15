import React, { useContext } from "react";
import Container from "../Container";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);

        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        navigate(location.state || "/");
      })
      .catch((error) => console.log(error));
  };

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
                <form onSubmit={handleLogin}>
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
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn bg-white text-black border-[#e5e5e5]">
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
