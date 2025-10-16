import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/ui/DashboardHeader";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-darkBg text-gray-900 dark:text-darkText overflow-hidden transition-colors duration-300">
      {/* ===== SIDEBAR ===== */}
      <AnimatePresence>
        {(isSidebarOpen || !isMobile) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed md:static top-0 left-0 z-40 h-full ${
              isCollapsed ? "w-20" : "w-64"
            } bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 shadow-lg md:shadow-none flex flex-col transition-all duration-300`}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              {!isCollapsed && (
                <h1 className="font-bold text-lg text-primary dark:text-blue-400 whitespace-nowrap">
                  VikkyEduConnect
                </h1>
              )}
              <div className="flex items-center gap-2">
                {!isMobile && (
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                  >
                    {isCollapsed ? (
                      <ChevronsRight size={18} />
                    ) : (
                      <ChevronsLeft size={18} />
                    )}
                  </button>
                )}
                {isMobile && (
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* SIDEBAR LINKS */}
            <div className="flex-1 overflow-y-auto">
              <DashboardSidebar collapsed={isCollapsed} />
            </div>

            {/* LOGOUT */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className={`flex items-center gap-2 w-full text-left text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-[#334155] px-3 py-2 rounded-md transition ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <LogOut size={16} />
                {!isCollapsed && <span>Logout</span>}
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="flex-1 flex flex-col h-full">
        {/* HEADER */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 transition-colors duration-300">
          <div className="flex items-center gap-3">
            {isMobile && (
              <button
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu size={20} />
              </button>
            )}
            <h2 className="text-lg font-semibold text-primary dark:text-blue-400">
              School Dashboard
            </h2>
          </div>
          <DashboardHeader />
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
          {children}
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
