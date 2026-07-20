import { Menu, Bell, Plus } from "lucide-react";

import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import { useLayout } from "../../context/LayoutContext";

function Navbar() {

  const {
    toggleSidebar,
    openMobileSidebar,
  } = useLayout();

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      openMobileSidebar();
    } else {
      toggleSidebar();
    }
  };

  return (
    <header
      className="
      sticky
      top-0
      z-30
      flex
      h-[72px]
      items-center
      justify-between
      border-b
      border-white/5
      bg-surface/80
      backdrop-blur-xl
      px-4
      sm:px-6
      lg:px-8
      "
    >
      {/* LEFT */}
      <div className="flex min-w-0 flex-1 items-center gap-3 lg:gap-5">

        <button
          onClick={handleMenuClick}
          className="
          flex h-10 w-10 items-center justify-center
          rounded-xl
          transition-colors
          hover:bg-hover
        "
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>

        <SearchBar />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-4">

        <button
          className="
            relative
            flex h-10 w-10 items-center justify-center
            rounded-lg
            hover:bg-card
            transition-colors
          "
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-primary
              text-[10px]
              font-medium
              text-white
            "
          >
            3
          </span>
        </button>

        <Button
          className="flex items-center gap-2"
        >
          <Plus size={18} />

          <span className="hidden sm:inline">
            Create
          </span>
        </Button>

        <Avatar
          name="Pritesh Gholap"
          image="https://i.pravatar.cc/150?img=12"
        />

      </div>
    </header>
  );
}

export default Navbar;