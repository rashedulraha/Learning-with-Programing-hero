import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form clicked");
  };

  const [password, setPassword] = useState("");

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="border p-3 rounded-md"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="border p-3 rounded-md"
            type="password"
            name="password"
            placeholder="*****"
            defaultValue={password}
            onChange={handlePasswordOnChange}
            required
          />
        </div>
        <div>
          <input
            className="border p-3 rounded-md"
            type="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            className="border p-3 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledField;
