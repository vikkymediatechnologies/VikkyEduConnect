// src/components/layout/DashboardLayout.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/ui/DashboardHeader";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* ===== SIDEBAR ===== */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed md:static top-0 left-0 z-40 h-full w-64 bg-white/90 backdrop-blur-xl border-r border-gray-200 shadow-lg md:shadow-none flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h1 className="font-bold text-lg text-primary">
                VikkyEduConnect
              </h1>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <DashboardSidebar />
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="flex-1 flex flex-col h-full">
        {/* HEADER */}
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={20} />
            </button>
            <h2 className="text-lg font-semibold text-primary">Dashboard</h2>
          </div>
          <DashboardHeader />
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
