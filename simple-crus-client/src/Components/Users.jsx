import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    // ! save this user data to database (via server)
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log("After saving data ", data));
  };

  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />

        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  );
};

export default Users;
