import { useState } from "react";
import DashboardHeader from "../headers/DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <Sidebar show={sidebarOpen} onClose={setSidebarOpen} />
        <div className="lg:pl-72">
          <DashboardHeader onOpenSidebar={setSidebarOpen} />
          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
