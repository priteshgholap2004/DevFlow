import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import StatsGrid from "../features/dashboard/components/StatsGrid";
import TodayTasks from "../features/dashboard/components/TodayTasks";
import RecentActivity from "../features/dashboard/components/RecentActivity";
import ProjectsOverview from "../features/dashboard/components/ProjectsOverview";

function Dashboard() {
  return (
     <div className="mx-auto max-w-7xl space-y-8">
      <DashboardHeader name="Pritesh" />

      <StatsGrid />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TodayTasks />
        </div>

        <div>
          <RecentActivity />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectsOverview />
        </div>

        <div>
          {/* Team Overview will go here */}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;