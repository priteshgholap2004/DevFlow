import { cn } from "../../../lib/utils";

const statusStyles = {
  Active:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",

  Review:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

  Completed:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

function ProjectCard({
  name,
  description,
  progress,
  status,
  dueDate,
  tasks,
  members,
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold text-text">
            {name}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {description}
          </p>

        </div>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            statusStyles[status]
          )}
        >
          {status}
        </span>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-muted">
            Progress
          </span>

          <span className="font-medium text-text">
            {progress}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-hover">

          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex -space-x-2">

          {Array.from({ length: members }).map((_, index) => (
            <div
              key={index}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-primary text-xs font-semibold text-white"
            >
              {index + 1}
            </div>
          ))}

        </div>

        <div className="text-right">

          <p className="text-sm font-medium text-text">
            {tasks} Tasks
          </p>

          <p className="text-xs text-muted">
            Due {dueDate}
          </p>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;