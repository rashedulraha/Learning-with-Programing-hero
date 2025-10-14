import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const useInformation = {
    user: "Rashedulilam",
  };
  return <AuthContext value={useInformation}>{children}</AuthContext>;
};

export default AuthProvider;
