import React, { use } from "react";
import "../index.css";

import { toast } from "react-toastify";

const Users = ({ userPromise }) => {
  const initialData = use(userPromise);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log(name, email);

    const newUser = { name, email };

    // ! save this user data to database (via server)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After saving data ", data);
        if (data.insertedId) {
          toast.success("user add successfully");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your valid email" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      {/* data  load and display data  */}
      <div className=" customStyle mt-10  border ">
        {initialData?.map((res) => (
          <div className="map-style">
            <div className="first">{res.name}</div>
            <div className="second">{res.email}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
