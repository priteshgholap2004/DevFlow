import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Activity,
  Settings,
  Users,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/dashboard/projects",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    href: "/dashboard/tasks",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Activity",
    icon: Activity,
    href: "/dashboard/activity",
  },
];

export const footerLinks = [
  {
    title: "Team",
    icon: Users,
    href: "/dashboard/team",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];