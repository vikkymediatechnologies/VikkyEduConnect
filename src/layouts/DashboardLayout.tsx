// // src/components/layout/DashboardLayout.tsx
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import DashboardHeader from "@/components/ui/DashboardHeader";
// import DashboardSidebar from "@/components/ui/DashboardSidebar";

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   // ✅ Load role dynamically from localStorage
//   useEffect(() => {
//     const storedRole = localStorage.getItem("role") || "student";
//     setRole(storedRole);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("role");
//     navigate("/signin");
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
//       {/* ===== SIDEBAR ===== */}
//       <AnimatePresence>
//         {(isSidebarOpen || window.innerWidth >= 768) && (
//           <motion.aside
//             key="sidebar"
//             initial={{ x: -280, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -280, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 80, damping: 18 }}
//             className="fixed md:static top-0 left-0 z-40 h-full w-64 bg-white/90 backdrop-blur-lg border-r border-gray-200 shadow-lg md:shadow-none flex flex-col"
//           >
//             {/* Sidebar Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <motion.h1
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="font-extrabold text-lg text-primary"
//               >
//                 VikkyEduConnect
//               </motion.h1>

//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Sidebar Navigation */}
//             <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
//               <DashboardSidebar />
//             </div>

//             {/* Sidebar Footer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-md"
//             >
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center justify-center gap-2 w-full text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition-all"
//               >
//                 <LogOut size={16} />
//                 Logout
//               </button>
//             </motion.div>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* ===== MAIN CONTENT ===== */}
//       <div className="flex-1 flex flex-col h-full relative">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="flex items-center justify-between px-4 py-3 bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 shadow-sm"
//         >
//           <div className="flex items-center gap-3">
//             <button
//               className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             >
//               <Menu size={20} />
//             </button>
//             <h2 className="text-lg font-semibold text-primary capitalize">
//               {role} Dashboard
//             </h2>
//           </div>
//           <DashboardHeader />
//         </motion.header>

//         {/* Main Page Content */}
//         <motion.main
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="flex-1 overflow-y-auto p-6"
//         >
//           {children}
//         </motion.main>
//       </div>

//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default DashboardLayout;




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/ui/DashboardHeader";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  // For responsive behavior
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
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
            } bg-white/90 backdrop-blur-xl border-r border-gray-200 shadow-lg md:shadow-none flex flex-col transition-all duration-300`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {!isCollapsed && (
                <h1 className="font-bold text-lg text-primary whitespace-nowrap">
                  VikkyEduConnect
                </h1>
              )}
              <div className="flex items-center gap-2">
                {!isMobile && (
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
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
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <DashboardSidebar collapsed={isCollapsed} />
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className={`flex items-center gap-2 w-full text-left text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition ${
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
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {isMobile && (
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu size={20} />
              </button>
            )}
            <h2 className="text-lg font-semibold text-primary">
              School Dashboard
            </h2>
          </div>
          <DashboardHeader />
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
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
