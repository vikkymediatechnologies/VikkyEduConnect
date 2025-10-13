import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "school" | "teacher" | "student";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const navLinks = {
    school: [
      { name: "Overview", path: "/dashboard/school" },
      { name: "Teachers", path: "/dashboard/school/teachers" },
      { name: "Students", path: "/dashboard/school/students" },
      { name: "Settings", path: "/dashboard/school/settings" },
    ],
    teacher: [
      { name: "My Classes", path: "/dashboard/teacher" },
      { name: "Assignments", path: "/dashboard/teacher/assignments" },
      { name: "Progress", path: "/dashboard/teacher/progress" },
      { name: "Settings", path: "/dashboard/teacher/settings" },
    ],
    student: [
      { name: "My Courses", path: "/dashboard/student" },
      { name: "Progress", path: "/dashboard/student/progress" },
      { name: "Assignments", path: "/dashboard/student/assignments" },
      { name: "Settings", path: "/dashboard/student/settings" },
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ✅ Sidebar */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-white border-r p-4 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6">EduConnect</h2>
        <nav className="flex-1 space-y-3">
          {navLinks[role].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 px-3 rounded-md hover:bg-blue-100 text-gray-700 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </motion.aside>

      {/* ✅ Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold capitalize">
            {role} Dashboard
          </h1>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
