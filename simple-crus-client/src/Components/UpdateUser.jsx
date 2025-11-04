import React from "react";
import Container from "./Container";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const update = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateUser = { name, email };

    fetch(`http://localhost:3000/users/${update._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => console.log("After update data", data));
  };

  return (
    <div>
      <div className=" h-screen  flex items-center justify-center ">
        <Container>
          <h2> Edit a user </h2>
          <div className="max-w-sm">
            <form onSubmit={handleUpdateUser}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Enter your name"
                />
                <label className="label">Password</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  name="email"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UpdateUser;
