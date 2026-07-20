import TaskItem from "./TaskItem";
import DashboardPanel from "../../../components/common/DashboardPanel";

const tasks = [
    {
        id: 1,
        title: "Design Dashboard UI",
        due: "Today",
        priority: "high",
    },
    {
        id: 2,
        title: "Connect Login API",
        due: "Today",
        priority: "medium",
    },
    {
        id: 3,
        title: "Deploy Backend",
        due: "Tomorrow",
        priority: "low",
    },
    {
        id: 4,
        title: "Review Project Structure",
        due: "Tomorrow",
        priority: "medium",
    },
];

function TodayTasks() {
    return (
        <DashboardPanel
            title="Today's Tasks"
            description="Stay on top of your priorities."
        >
            <div className="space-y-4">
                {tasks.map((task) => (
                    <TaskItem key={task.id} {...task} />
                ))}
            </div>
        </DashboardPanel>
    );
}

export default TodayTasks;