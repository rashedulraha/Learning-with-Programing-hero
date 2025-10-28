import React, { useReducer, useState } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {};
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  console.log(useReducer());

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   if (count <= 0) {
  //     return;
  //   }
  //   setCount(count - 1);
  // };

  return (
    <>
      <div className="p-4 h-lvh  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{state}</h1>
        <div className="flex  gap-5 font-bold text-lg mt-10">
          <button className="btn">Increment </button>
          <button className="btn">Decrement</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
