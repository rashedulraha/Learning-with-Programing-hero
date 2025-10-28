import { Suspense } from "react";
import Container from "./Components/Container";

import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <h1 className="font-bold text-2xl">User management client</h1>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
