import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input value:  ${inputRef.current.value} ${inputRef.current.value} `);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="email" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
