import { X } from "lucide-react";

import { cn } from "../../lib/utils";
import { useLayout } from "../../context/LayoutContext";

import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

function SidebarContent() {
  return (
    <>
      <SidebarLogo />
      <SidebarNav />
      <SidebarFooter />
    </>
  );
}

function Sidebar() {
  const {
    sidebarCollapsed,
    mobileSidebarOpen,
    closeMobileSidebar,
  } = useLayout();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex shrink-0 flex-col border-r border-white/5 bg-surface transition-all duration-300",
          sidebarCollapsed ? "w-20" : "w-[280px]"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-white/5 bg-surface transition-transform duration-300 md:hidden",
          mobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileSidebar}
            className="rounded-xl p-2 hover:bg-hover"
          >
            <X size={20} />
          </button>
        </div>

        <SidebarContent />
      </aside>
    </>
  );
}

export default Sidebar;