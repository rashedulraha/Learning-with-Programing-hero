import React, { use, useState } from "react";
import { toast } from "react-toastify";

const Users = ({ userDataPromise }) => {
  const initialUser = use(userDataPromise);
  const [usersInfo, setUsersInfo] = useState(initialUser);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Hello dear how are you ");

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!name || !email) {
      toast.error("please field the input field");
      return;
    }

    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving data", data);

        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...usersInfo, newUser];
          setUsersInfo(newUsers);

          toast.success("User successfully");
        }
      });
  };

  const handleDeleteUser = (userId) => {
    console.log("user delete", userId);

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => console.log("After delete from data base", data));
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                name="name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                name="email"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Create</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div>
        {usersInfo?.map((user) => (
          <p key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user._id)} className="btn">
              x
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
