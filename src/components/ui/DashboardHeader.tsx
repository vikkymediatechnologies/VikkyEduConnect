// src/components/layout/DashboardHeader.tsx
import { Bell, User } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const DashboardHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-5"
    >
      {/* Notification Button */}
      <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkCard transition">
        <Bell size={20} className="text-gray-600 dark:text-darkText" />
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
          3
        </span>
      </button>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* User Info */}
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-darkCard rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          V
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-800 dark:text-darkText">
            Victor
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Admin
          </span>
        </div>
        <User size={18} className="text-gray-500 dark:text-darkText" />
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
