import { useState } from "react";
import Button from "../../../components/ui/Button";
import ProjectGrid from "../components/ProjectGrid";
import mockProjects from "../data/mockProjects";
import ProjectToolbar from "../components/ProjectToolbar";

function ProjectsPage() {

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [sort, setSort] = useState("newest");

    const filteredProjects = mockProjects.filter((project) => {
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

                <Button>
                    + New Project
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
                <ProjectGrid projects={sortedProjects} />
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
        </div>
    );
}

export default ProjectsPage;