import { Search } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) {
  return (
    <div
      className={`
        hidden
        sm:flex
        items-center
        flex-1
        max-w-xs
        md:max-w-md
        lg:max-w-lg
        xl:max-w-xl
        h-11
        rounded-2xl
        border
        border-border
        bg-background
        px-4
        ${className}
      `}
    >
      <Search size={18} className="text-muted" />

      <input
        type="text"
        {...(onChange
          ? {
              value,
              onChange,
            }
          : {
              defaultValue: value,
            })}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-3 text-sm text-text placeholder:text-muted outline-none"
      />

      <span className="rounded-md border border-border px-2 py-1 text-xs text-muted">
        Ctrl + K
      </span>
    </div>
  );
}

export default SearchBar;