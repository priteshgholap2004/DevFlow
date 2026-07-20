import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "sidebarCollapsed",
      JSON.stringify(sidebarCollapsed)
    );
  }, [sidebarCollapsed]);

  const toggleSidebar = () =>
    setSidebarCollapsed((prev) => !prev);

  const openMobileSidebar = () =>
    setMobileSidebarOpen(true);

  const closeMobileSidebar = () =>
    setMobileSidebarOpen(false);

  const toggleMobileSidebar = () =>
    setMobileSidebarOpen((prev) => !prev);

  return (
    <LayoutContext.Provider
      value={{
        sidebarCollapsed,
        toggleSidebar,

        mobileSidebarOpen,
        openMobileSidebar,
        closeMobileSidebar,
        toggleMobileSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}