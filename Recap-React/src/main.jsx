import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Page/Home";
import HooksForm from "./Components/HooksForm/HooksForm";
import TitleUpdater from "./Components/TitleUpdater/TitleUpdater";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "hooks-form",
    Component: HooksForm,
  },
  {
    path: "document",
    Component: TitleUpdater,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
