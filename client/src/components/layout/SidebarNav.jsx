import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../constants/navigation";
import { useLayout } from "../../context/LayoutContext";
import { cn } from "../../lib/utils";

function SidebarNav() {
  const { sidebarCollapsed } = useLayout();

  return (
    <nav className="flex-1 px-3 py-5">
      {!sidebarCollapsed && (
        <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Main
        </p>
      )}

      <ul className="space-y-1">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title}>
              <NavLink
                to={item.href}
                end={item.href === "/dashboard"}
                className={({ isActive }) =>
                  cn(
                    "flex h-11 rounded-xl border-l-[3px] text-sm font-medium transition-all duration-200",
                    sidebarCollapsed
                      ? "justify-center px-0"
                      : "items-center gap-3 px-4",
                    isActive
                      ? "border-primary bg-hover text-text shadow-card"
                      : "border-transparent text-muted hover:bg-hover hover:text-text"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={cn(
                        "transition-colors duration-200",
                        isActive ? "text-primary" : "text-muted"
                      )}
                    />

                    {!sidebarCollapsed && <span>{item.title}</span>}
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarNav;