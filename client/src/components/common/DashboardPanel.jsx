import { cn } from "../../lib/utils";

function DashboardPanel({
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-card shadow-card",
        className
      )}
    >
      {(title || description) && (
        <div className="border-b border-border px-6 py-5">
          {title && (
            <h2 className="text-lg font-semibold text-text">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-1 text-sm text-muted">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="p-6">
        {children}
      </div>
    </section>
  );
}

export default DashboardPanel;