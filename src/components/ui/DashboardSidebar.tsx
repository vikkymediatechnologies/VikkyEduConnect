// src/components/ui/DashboardSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart2,
  Settings,
  Users,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  collapsed?: boolean;
}

const DashboardSidebar = ({ collapsed = false }: SidebarProps) => {
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
    <nav
      className={`flex flex-col gap-1 px-3 py-5 text-sm transition-colors duration-300 
      bg-white/90 dark:bg-[#1e293b]/95 backdrop-blur-xl`}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <motion.div key={item.path} whileHover={{ scale: 1.03 }}>
            <Link
              to={item.path}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-3 px-4"
              } py-2.5 rounded-lg font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#334155] hover:text-blue-600"
              }`}
              title={collapsed ? item.name : ""}
            >
              <span
                className={`transition-transform duration-200 ${
                  isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.icon}
              </span>
              {!collapsed && <span>{item.name}</span>}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default DashboardSidebar;
