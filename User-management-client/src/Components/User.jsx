import React, { use } from "react";

const User = ({ dataLoad }) => {
  const userData = use(dataLoad);
  console.log(userData);

  return (
    <>
      <h1>userData {userData.length}</h1>

      <p>
        {userData?.map((user) => (
          <p key={user?.id}>{user?.name}</p>
        ))}
      </p>
    </>
  );
};

export default User;
