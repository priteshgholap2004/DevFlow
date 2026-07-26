import { useState } from "react";
import Button from "../../../components/ui/Button";
import ProjectGrid from "../components/ProjectGrid";
import mockProjects from "../data/mockProjects";
import ProjectToolbar from "../components/ProjectToolbar";
import CreateProjectModal from "../components/CreateProjectModal";
import Modal from "../../../components/ui/Modal";

function ProjectsPage() {

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [sort, setSort] = useState("newest");

    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

    const [projects, setProjects] = useState(mockProjects);

    const [selectedProject, setSelectedProject] = useState(null);

    const [projectToDelete, setProjectToDelete] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleCreateProject = (project) => {
        setProjects((prev) => [
            {
                id: Date.now(),
                progress: 0,
                tasks: 0,
                members: 0,
                ...project,
            },
            ...prev,
        ]);
    };

    const handleUpdateProject = (updatedProject) => {
        setProjects((prev) =>
            prev.map((project) =>
                project.id === updatedProject.id
                    ? updatedProject
                    : project
            )
        );
    };

    const handleDeleteClick = (project) => {
        setProjectToDelete(project);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteProject = () => {
        setProjects((prev) =>
            prev.filter(
                (project) => project.id !== projectToDelete.id
            )
        );

        setProjectToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const handleEditClick = (project) => {
        setSelectedProject(project);
        setIsProjectModalOpen(true);
    };

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
            status === "all" ||
            project.status.toLowerCase() === status;

        return matchesSearch && matchesStatus;
    });

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        switch (sort) {
            case "progress":
                return b.progress - a.progress;

            case "due":
                return new Date(a.dueDate) - new Date(b.dueDate);

            default:
                return b.id - a.id;
        }
    });

    return (
        <div className="mx-auto max-w-7xl space-y-8">
            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-text">
                        Projects
                    </h1>

                    <p className="mt-2 text-muted">
                        Manage, track, and collaborate on all your projects.
                    </p>
                </div>

                <Button onClick={() => setIsProjectModalOpen(true)}>
                    New Project
                </Button>
            </div>

            <ProjectToolbar
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                sort={sort}
                onSortChange={setSort}
            />

            {/* Project Grid */}
            {sortedProjects.length > 0 ? (
                <ProjectGrid
                    projects={sortedProjects}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />
            ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center shadow-card">
                    <div className="mb-4 text-5xl">📁</div>

                    <h2 className="text-xl font-semibold text-text">
                        No projects found
                    </h2>

                    <p className="mt-2 max-w-md text-sm text-muted">
                        Try changing your search or filters, or create a new project.
                    </p>

                    <Button
                        className="mt-6"
                        onClick={() => {
                            setSearch("");
                            setStatus("all");
                            setSort("newest");
                        }}
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
            <CreateProjectModal
                open={isProjectModalOpen}
                onClose={() => {
                    setIsProjectModalOpen(false);
                    setSelectedProject(null);
                }}
                onCreateProject={handleCreateProject}
                onUpdateProject={handleUpdateProject}
                selectedProject={selectedProject}
            />
            <Modal
                open={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setProjectToDelete(null);
                }}
            >
                <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">

                    <h2 className="text-xl font-semibold text-text">
                        Delete Project
                    </h2>

                    <p className="mt-4 text-sm text-muted">
                        Are you sure you want to delete{" "}
                        <span className="font-semibold text-text">
                            "{projectToDelete?.name}"
                        </span>
                        ?
                    </p>

                    <p className="mt-2 text-sm text-danger">
                        This action cannot be undone.
                    </p>

                    <div className="mt-8 flex justify-end gap-3">

                        <Button
                            variant="secondary"
                            onClick={() => {
                                setIsDeleteModalOpen(false);
                                setProjectToDelete(null);
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={handleDeleteProject}
                        >
                            Delete Project
                        </Button>

                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default ProjectsPage;