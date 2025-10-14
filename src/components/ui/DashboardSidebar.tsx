// src/components/layout/DashboardSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart2,
  Settings,
  Users,
  Calendar,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Courses", path: "/dashboard/courses", icon: <BookOpen size={18} /> },
    { name: "Students", path: "/dashboard/students", icon: <Users size={18} /> },
    { name: "Schedule", path: "/dashboard/schedule", icon: <Calendar size={18} /> },
    { name: "Progress", path: "/dashboard/progress", icon: <BarChart2 size={18} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={18} /> },
  ];

  return (
    <nav className="flex flex-col gap-1 px-3 py-5 text-sm">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100 hover:text-primary"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardSidebar;

