import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
