import {
  FolderKanban,
  CheckSquare,
  CircleCheck,
  Users,
} from "lucide-react";

import StatCard from "../components/StatCard";

function StatsGrid() {
  return (
    <section
      className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-4
    "
    >
      <StatCard
        title="Active Projects"
        value="8"
        trend="+2 this week"
        icon={FolderKanban}
      />

      <StatCard
        title="Tasks Due"
        value="12"
        trend="5 high priority"
        icon={CheckSquare}
      />

      <StatCard
        title="Completed"
        value="41"
        trend="+18% this week"
        icon={CircleCheck}
      />

      <StatCard
        title="Team Members"
        value="6"
        trend="2 online now"
        icon={Users}
      />
    </section>
  );
}

export default StatsGrid;