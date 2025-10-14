import React from "react";
import Container from "../Container";
import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBaseAuthentication/Firebase.init";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // authentication
  };

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
                <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Full name</label>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Full Name"
                    />
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
                        Already have an account?{" "}
                        <Link
                          to={"/login"}
                          className="text-blue-500 hover:text-blue-700">
                          Login
                        </Link>
                      </p>
                    </div>
                    <button className="btn btn-neutral mt-4">Resister</button>
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

export default Register;
