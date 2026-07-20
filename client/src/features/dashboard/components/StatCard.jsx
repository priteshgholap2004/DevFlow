import { cn } from "../../../lib/utils";

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-border",
        "bg-card",
        "mt-2 text-3xl",
        "shadow-card",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:border-primary/30"
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className="
          flex h-12 w-12
          items-center justify-center
          rounded-xl
          bg-primary/10
        "
        >
          <Icon
            size={22}
            className="text-primary"
          />
        </div>
      </div>

      {trend && (
        <p className="mt-4 text-sm text-muted">
          {trend}
        </p>
      )}
    </div>
  );
}

export default StatCard;