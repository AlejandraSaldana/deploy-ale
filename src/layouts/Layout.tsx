import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 ">

        <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
