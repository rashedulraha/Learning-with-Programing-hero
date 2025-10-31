import React from "react";

const Users = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Hello dear how are you ");
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" /> <br />
        <input type="password" name="password" /> <br />
        <input type="submit" value="Abb user" />
      </form>
    </div>
  );
};

export default Users;
