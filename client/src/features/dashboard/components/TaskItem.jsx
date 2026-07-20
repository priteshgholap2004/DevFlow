import { CalendarDays } from "lucide-react";
import { cn } from "../../../lib/utils";

const priorityStyles = {
  high: "bg-red-500/10 text-red-400",
  medium: "bg-yellow-500/10 text-yellow-400",
  low: "bg-green-500/10 text-green-400",
};

function TaskItem({ title, due, priority }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:border-primary/30"
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "h-3 w-3 rounded-full",
            priority === "high" && "bg-red-400",
            priority === "medium" && "bg-yellow-400",
            priority === "low" && "bg-green-400"
          )}
        />

        <div>
          <h3 className="font-medium text-text">{title}</h3>

          <p className="mt-1 text-sm text-muted capitalize">
            {priority} Priority
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted">
        <CalendarDays size={16} />
        <span>{due}</span>
      </div>
    </div>
  );
}

export default TaskItem;