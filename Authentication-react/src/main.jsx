import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
