import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
]);

export default router;
