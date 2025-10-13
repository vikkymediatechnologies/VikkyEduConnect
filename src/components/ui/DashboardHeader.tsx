import { Bell, User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600" size={20} />
        <div className="flex items-center gap-2">
          <User size={20} className="text-gray-600" />
          <span className="text-sm font-medium">Victor</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
