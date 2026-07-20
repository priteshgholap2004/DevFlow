import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;