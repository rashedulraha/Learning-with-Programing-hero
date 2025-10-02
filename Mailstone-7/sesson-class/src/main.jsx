import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch(`https://openapi.programming-hero.com/api/plants`),
        element: <Home />,
      },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
