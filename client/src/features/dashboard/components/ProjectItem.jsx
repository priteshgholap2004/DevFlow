import { cn } from "../../../lib/utils";

const statusColors = {
  active: "bg-emerald-500",
  review: "bg-yellow-500",
  completed: "bg-blue-500",
};

function ProjectItem({
  name,
  subtitle,
  progress,
  status,
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-text">
            {name}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {subtitle}
          </p>
        </div>

        <span className="text-sm font-medium text-text">
          {progress}%
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-hover">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={cn(
            "h-2.5 w-2.5 rounded-full",
            statusColors[status]
          )}
        />

        <span className="text-sm capitalize text-muted">
          {status}
        </span>
      </div>
    </div>
  );
}

export default ProjectItem;