import { ChevronDown } from "lucide-react";
import { useLayout } from "../../context/LayoutContext";
import { cn } from "../../lib/utils";

function SidebarLogo() {
    const workspace = "Team Workspace";
    const { sidebarCollapsed } = useLayout();

    return (
        <div
            className={cn(
                "border-b border-border transition-all duration-300",
                sidebarCollapsed ? "p-4" : "p-5"
            )}
        >
            <div
                className={cn(
                    "flex items-center",
                    sidebarCollapsed
                        ? "mx-2 justify-center rounded-xl"
                        : "gap-3 px-4"
                )}
            >
                {/* Logo */}
                <div
                    className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-xl
                    bg-primary
                    text-lg
                    font-bold
                    text-white
                    shadow-lg
                    shadow-primary/20
                "
                >
                    ◈
                </div>

                {!sidebarCollapsed && (
                    <div className="min-w-0 flex-1">
                        <h2 className="truncate text-base font-semibold text-text">
                            DevFlow
                        </h2>

                        <button
                            className="
                            mt-0.5
                            flex items-center gap-1
                            text-sm
                            text-muted
                            transition-colors
                            hover:text-white
                        "
                        >
                            {workspace}

                            <ChevronDown size={15} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SidebarLogo;