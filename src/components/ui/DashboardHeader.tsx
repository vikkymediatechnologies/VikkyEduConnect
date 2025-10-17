// // src/components/layout/DashboardHeader.tsx
// import { Bell, Moon, Sun, User } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const DashboardHeader = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="flex items-center gap-5"
//     >
//       {/* 🔔 Notification Button */}
//       <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#334155] transition">
//         <Bell size={20} className="text-gray-600 dark:text-gray-300" />
//         <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
//           3
//         </span>
//       </button>

//       {/* 🌗 Theme Toggle (animated) */}
//       <motion.button
//         onClick={toggleTheme}
//         className="relative p-2 rounded-full bg-gray-100 dark:bg-[#1e293b] hover:bg-gray-200 dark:hover:bg-[#334155] transition-all"
//         whileTap={{ scale: 0.9 }}
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {theme === "light" ? (
//             <motion.div
//               key="moon"
//               initial={{ rotate: -90, opacity: 0, y: -5 }}
//               animate={{ rotate: 0, opacity: 1, y: 0 }}
//               exit={{ rotate: 90, opacity: 0, y: 5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Moon size={20} className="text-gray-700" />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="sun"
//               initial={{ rotate: 90, opacity: 0, y: 5 }}
//               animate={{ rotate: 0, opacity: 1, y: 0 }}
//               exit={{ rotate: -90, opacity: 0, y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Sun size={20} className="text-yellow-400 drop-shadow-glow" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* 👤 User Info */}
//       <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-[#1e293b] rounded-full hover:bg-gray-200 dark:hover:bg-[#334155] transition cursor-pointer">
//         <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//           V
//         </div>
//         <div className="hidden md:flex flex-col leading-tight">
//           <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
//             Victor
//           </span>
//           <span className="text-xs text-gray-500 dark:text-gray-400">
//             Admin
//           </span>
//         </div>
//         <User size={18} className="text-gray-500 dark:text-gray-400" />
//       </div>
//     </motion.div>
//   );
// };

// export default DashboardHeader;





// src/components/layout/DashboardHeader.tsx
import { Bell, Moon, Sun, User, LogOut, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashboardHeader = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState<{ name?: string; role?: string }>({});

  // ✅ Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // ✅ Theme handler
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ✅ Dummy notifications
  const notifications = [
    { id: 1, text: "New assignment uploaded" },
    { id: 2, text: "System maintenance scheduled" },
    { id: 3, text: "Reminder: Parent meeting tomorrow" },
  ];

  const handleUpload = () => toast.info("Upload feature coming soon...");
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/signin";
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-between items-center gap-4 px-6 py-3 bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-40"
    >
      {/* ✅ Left: Dynamic Dashboard Title */}
      <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 capitalize">
        {user?.role ? `${user.role} Dashboard` : "Dashboard"}
      </h1>

      {/* ✅ Right: Notification, Theme, and User */}
      <div className="flex items-center gap-4 relative">
        {/* 🔔 Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#334155] transition"
          >
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
              {notifications.length}
            </span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-3 w-64 bg-white dark:bg-[#1e293b] shadow-lg rounded-lg overflow-hidden z-50"
              >
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 font-semibold text-sm">
                  Notifications
                </div>
                <ul className="max-h-48 overflow-y-auto">
                  {notifications.map((note) => (
                    <li
                      key={note.id}
                      className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#334155] cursor-pointer"
                    >
                      {note.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🌗 Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-[#1e293b] hover:bg-gray-200 dark:hover:bg-[#334155] transition"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon size={20} className="text-gray-700" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun size={20} className="text-yellow-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* 👤 User Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-[#1e293b] rounded-full hover:bg-gray-200 dark:hover:bg-[#334155] transition cursor-pointer"
          >
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {user?.name || "Guest User"}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {user?.role || "User"}
              </span>
            </div>
            <User size={18} className="text-gray-500 dark:text-gray-400" />
          </button>

          {/* 🧩 Dropdown */}
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-3 w-52 bg-white dark:bg-[#1e293b] shadow-lg rounded-lg overflow-hidden z-50"
              >
                <button
                  onClick={handleUpload}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#334155]"
                >
                  <Upload size={16} /> Upload Document
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#334155]"
                >
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
