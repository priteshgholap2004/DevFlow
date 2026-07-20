import SearchBar from "../../../components/ui/SearchBar";

function ProjectToolbar({
    search,
    onSearchChange,
    status,
    onStatusChange,
    sort,
    onSortChange,
}) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-card lg:flex-row lg:items-center lg:justify-between">

            <div className="flex-1">
                <SearchBar
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search projects..."
                    className="max-w-none"
                />
            </div>

            <div className="flex flex-wrap items-center gap-3">

                <select
                    value={status}
                    onChange={(e) => onStatusChange(e.target.value)}
                    className="rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none transition focus:border-primary"
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="review">Review</option>
                    <option value="completed">Completed</option>
                </select>

                <select
                    className="rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none transition focus:border-primary"
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="newest">Newest</option>
                    <option value="progress">Progress</option>
                    <option value="due">Due Date</option>
                </select>

            </div>

        </div>
    );
}

export default ProjectToolbar;