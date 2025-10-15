import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Order from "../Components/Order/Order";
import Profile from "../Components/Profile/Profile";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoutes>
            <Dashboard />
          </PrivetRoutes>
        ),
      },
      {
        path: "order",
        element: (
          <PrivetRoutes>
            <Order />
          </PrivetRoutes>
        ),
      },

      {
        path: "profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
