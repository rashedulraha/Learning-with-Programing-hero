import React, { useRef } from "react";

const Home = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef);
  };

  return (
    <>
      <h1>Check use Ref</h1>

      <input ref={inputRef} type="text" placeholder="Enter use name" />
      <button onClick={handleFocus}>Focus on input field</button>
    </>
  );
};

export default Home;
