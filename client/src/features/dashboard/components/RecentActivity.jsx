import {
  CheckCircle2,
  FolderKanban,
  UserPlus,
} from "lucide-react";
import DashboardPanel from "../../../components/common/DashboardPanel";

const activities = [
  {
    id: 1,
    icon: CheckCircle2,
    text: "Completed Login API",
    time: "2 min ago",
  },
  {
    id: 2,
    icon: FolderKanban,
    text: "Created DevFlow Dashboard",
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: UserPlus,
    text: "Invited Alex to Workspace",
    time: "Yesterday",
  },
];

function RecentActivity() {
  return (
    <DashboardPanel
        title="Recent Activity"
        description="Latest updates from your workspace."
    >

      <div className="mt-6 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex gap-3"
            >
              <div className="mt-1 rounded-lg bg-primary/10 p-2">
                <Icon
                  size={18}
                  className="text-primary"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-text">
                  {activity.text}
                </p>

                <span className="text-xs text-muted">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardPanel>
  );
}

export default RecentActivity;