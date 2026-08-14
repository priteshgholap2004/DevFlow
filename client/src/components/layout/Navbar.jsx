import { Menu, Bell, Plus, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import { useLayout } from "../../context/LayoutContext";
import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const {
    toggleSidebar,
    openMobileSidebar,
  } = useLayout();

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/login", { replace: true });
  }

  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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

        <div 
          ref={profileRef}
          className="relative"
        >
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl p-1 transition-colors hover:bg-card"
          >
            <Avatar
              name={user?.name || "Guest"}
              image={user?.avatar}
            />

            <span className="hidden lg:block font-medium">
              {user?.name}
            </span>

            <ChevronDown size={16} />

          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-surface shadow-xl p-4" >
              <p className="font-semibold">
                {user?.name}
              </p>
              <p className="text-sm text-muted mt-1">
                {user?.email}
              </p>

              <hr className="my-3 border-border" />
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-red-400 transition-colors hover:bg-card"
              >
                <LogOut size={16} />
                Logout
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;