import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
