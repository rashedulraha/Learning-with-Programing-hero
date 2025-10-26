import React, { useState } from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleFocusFieldONChange = (e) => {
    setFieldValue(e.target.value);
  };

  return [fieldValue, handleFocusFieldONChange];
};

export default useInputField;
