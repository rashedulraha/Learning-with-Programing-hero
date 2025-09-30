import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const HandleError = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <>
      <form onSubmit={HandleError}>
        <input ref={emailRef} type="email" name="" /> <br />
        <input ref={passwordRef} type="password" name="" /> <br />
        <input type="submit" value={"submit"} />
      </form>
    </>
  );
};

export default UnControlledField;
