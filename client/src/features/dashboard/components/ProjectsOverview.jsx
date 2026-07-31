import DashboardPanel from "../../../components/common/DashboardPanel";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    name: "DevFlow",
    subtitle: "Frontend Development",
    progress: 80,
    status: "active",
  },
  {
    id: 2,
    name: "Portfolio Website",
    subtitle: "UI Redesign",
    progress: 60,
    status: "review",
  },
  {
    id: 3,
    name: "College ERP",
    subtitle: "Backend API",
    progress: 100,
    status: "completed",
  },
];

function ProjectsOverview() {
  return (
    <DashboardPanel
      title="Projects Overview"
      description="Track project progress at a glance."
    >
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectItem
            key={project._id}
            {...project}
          />
        ))}
      </div>
    </DashboardPanel>
  );
}

export default ProjectsOverview;