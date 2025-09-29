import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";

import Laptops from "./components/Laptops/Laptops.jsx";
import Mobile from "./components/Mobiles/Mobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        path: "/laptops",
        Component: Laptops,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/mobile",
        Component: Mobile,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
