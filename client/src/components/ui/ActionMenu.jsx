import { useState } from "react";
import { MoreVertical } from "lucide-react";

function ActionMenu({ items = [] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg
                    transition-colors
                    hover:bg-hover
                "
                aria-label="Project actions"
            >
                <MoreVertical size={18} />
            </button>

            {open && (
                <div
                    className="
                        absolute
                        right-0
                        top-10
                        z-50
                        w-44
                        overflow-hidden
                        rounded-xl
                        border
                        border-border
                        bg-card
                        shadow-card
                    "
                >
                    {items.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                item.onClick();
                                setOpen(false);
                            }}
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                px-4
                                py-3
                                text-left
                                text-sm
                                text-text
                                transition-colors
                                hover:bg-hover
                            "
                        >
                            {item.icon}

                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ActionMenu;