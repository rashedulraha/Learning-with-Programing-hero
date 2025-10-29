import React from "react";
import Container from "./Container";

const FormInput = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);

    const newUser = { name, email };

    // ! send data to the server

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("After post", data);
      });
  };
  return (
    <>
      <Container>
        <div className="h-screen w-full flex items-center justify-start flex-col">
          <h1>Add user </h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
            <div className="card-body">
              <form onSubmit={handleAddUser}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Enter  your email"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FormInput;
