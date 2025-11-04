import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import Details from "./Components/Details.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";

//  adding react router
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },

  {
    path: "details/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: Details,
  },
  {
    path: "update-user/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ToastContainer />
  </StrictMode>
);
