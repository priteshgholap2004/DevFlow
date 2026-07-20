import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import { useLayout } from "../context/LayoutContext";

function DashboardLayout() {
  const { mobileSidebarOpen, closeMobileSidebar } = useLayout();

  return (
    <div className="flex h-screen overflow-hidden bg-background text-text">
      <Sidebar />

      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar />

        <main
          className="
            flex-1
            overflow-y-auto
            px-4
            py-5
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;