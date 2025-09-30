import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SimpleForm from "./component/simpleForm/SimpleForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Welcome to react element</div>,
    Component: SimpleForm,
  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
