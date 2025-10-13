import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, BarChart2, Settings } from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Courses", path: "/dashboard/courses", icon: <BookOpen size={18} /> },
    { name: "Progress", path: "/dashboard/progress", icon: <BarChart2 size={18} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
      <div className="p-6 font-bold text-lg text-primary">VikkyEduConnect</div>

      <nav className="flex-1 space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
              location.pathname === item.path
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 text-sm text-gray-500 border-t">© 2025 EduConnect</div>
    </aside>
  );
};

export default DashboardSidebar;
