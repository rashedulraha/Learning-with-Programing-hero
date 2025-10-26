import React, { useEffect, useState } from "react";

const TitleUpdater = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `count : - ${count}`;
  }, [count]);
  return (
    <>
      {/* <title>{`Count : - ${count}`}</title> */}
      <h1>Document updated</h1>

      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
    </>
  );
};

export default TitleUpdater;
