// src/components/layout/DashboardHeader.tsx
import { Bell, Moon, Sun, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DashboardHeader = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-5"
    >
      {/* 🔔 Notification Button */}
      <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#334155] transition">
        <Bell size={20} className="text-gray-600 dark:text-gray-300" />
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
          3
        </span>
      </button>

      {/* 🌗 Theme Toggle (animated) */}
      <motion.button
        onClick={toggleTheme}
        className="relative p-2 rounded-full bg-gray-100 dark:bg-[#1e293b] hover:bg-gray-200 dark:hover:bg-[#334155] transition-all"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, y: -5 }}
              animate={{ rotate: 0, opacity: 1, y: 0 }}
              exit={{ rotate: 90, opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={20} className="text-gray-700" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, y: 5 }}
              animate={{ rotate: 0, opacity: 1, y: 0 }}
              exit={{ rotate: -90, opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={20} className="text-yellow-400 drop-shadow-glow" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* 👤 User Info */}
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-[#1e293b] rounded-full hover:bg-gray-200 dark:hover:bg-[#334155] transition cursor-pointer">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          V
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Victor
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Admin
          </span>
        </div>
        <User size={18} className="text-gray-500 dark:text-gray-400" />
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
