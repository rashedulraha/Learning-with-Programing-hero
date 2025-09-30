import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form clicked");

    if (password.length < 6) {
      setHandleError("invalid password must be  6 character");
    } else {
      setHandleError("");
    }
  };

  const [password, setPassword] = useState("");
  const [HandleError, setHandleError] = useState("");
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 6) {
      setHandleError("invalid password must be 6 characters or longer. ");
    } else {
      setHandleError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <input
            className="border p-3 rounded-md"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </div> */}
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
        {/* <div>
          <input
            className="border p-3 rounded-md"
            type="name"
            name="name"
            placeholder="Name"
          />
        </div> */}
        <div>
          <input
            type="submit"
            value="submit"
            className="border p-3 rounded-md"
          />
        </div>

        <p>
          <span className="text-red-500">{HandleError}</span>
        </p>
      </form>
    </div>
  );
};

export default ControlledField;

/**
 * e.target [name of the input field ].value
 * use form action and fromData in the action handler fromData.get(name of the input field)
 * controlled component  use state on change of the field .useful to dynamic
 * handle all controlled field  on the state object
 *
 * const [formData , setFormData] = useState({
 * name:"",
 * password :"",
 * phone: "",
 * })   */
