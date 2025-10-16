import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  CalendarCheck,
  BarChart2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import LogoutButton from "@/components/ui/LogoutButton"; // ✅ Added Logout Button

const SchoolDashboard = () => {
  const [activeTab, setActiveTab] = useState("attendance");

  const stats = [
    {
      label: "Total Students",
      value: "1,240",
      change: "+8%",
      icon: <Users size={22} />,
      trend: "up",
      color: "bg-blue-500",
    },
    {
      label: "Teachers",
      value: "68",
      change: "+2%",
      icon: <BookOpen size={22} />,
      trend: "up",
      color: "bg-green-500",
    },
    {
      label: "Courses",
      value: "42",
      change: "0%",
      icon: <BarChart2 size={22} />,
      trend: "neutral",
      color: "bg-yellow-500",
    },
    {
      label: "Attendance Rate",
      value: "96%",
      change: "-1%",
      icon: <CalendarCheck size={22} />,
      trend: "down",
      color: "bg-red-500",
    },
  ];

  const dataSets: Record<string, { month: string; value: number }[]> = {
    attendance: [
      { month: "Jan", value: 88 },
      { month: "Feb", value: 92 },
      { month: "Mar", value: 94 },
      { month: "Apr", value: 90 },
      { month: "May", value: 95 },
      { month: "Jun", value: 97 },
      { month: "Jul", value: 93 },
    ],
    performance: [
      { month: "Jan", value: 75 },
      { month: "Feb", value: 78 },
      { month: "Mar", value: 82 },
      { month: "Apr", value: 79 },
      { month: "May", value: 85 },
      { month: "Jun", value: 87 },
      { month: "Jul", value: 90 },
    ],
    enrollments: [
      { month: "Jan", value: 150 },
      { month: "Feb", value: 200 },
      { month: "Mar", value: 220 },
      { month: "Apr", value: 260 },
      { month: "May", value: 280 },
      { month: "Jun", value: 300 },
      { month: "Jul", value: 340 },
    ],
  };

  const chartColors: Record<string, string> = {
    attendance: "#3b82f6",
    performance: "#22c55e",
    enrollments: "#f59e0b",
  };

  const tabs = [
    { id: "attendance", label: "Attendance" },
    { id: "performance", label: "Performance" },
    { id: "enrollments", label: "Enrollments" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-darkText">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              A quick summary of school performance and activities
            </p>
          </div>

          {/* ✅ Logout Button */}
          <LogoutButton />
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-darkCard p-5 rounded-2xl shadow-card-hover hover:shadow-glow transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl text-white ${stat.color} bg-opacity-90`}
                >
                  {stat.icon}
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up"
                      ? "text-green-500"
                      : stat.trend === "down"
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  {stat.trend === "up" && <ArrowUpRight size={16} />}
                  {stat.trend === "down" && <ArrowDownRight size={16} />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">
                {stat.label}
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-darkText mt-1">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CHART + ACTIVITY SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* INTERACTIVE CHART */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-darkText">
                {tabs.find((t) => t.id === activeTab)?.label} Trend
              </h2>

              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="h-64 sm:h-72 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataSets[activeTab]}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                    className="dark:stroke-gray-700"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#6b7280" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#6b7280" }}
                    tickLine={false}
                    domain={[0, "dataMax + 10"]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      borderRadius: "10px",
                      border: "none",
                      color: "#fff",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={chartColors[activeTab]}
                    strokeWidth={3}
                    dot={{ r: 5, fill: chartColors[activeTab] }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* RECENT ACTIVITIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:col-span-2 bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md w-full"
          >
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-darkText">
              Recent Activities
            </h2>
            <ul className="space-y-4">
              {[
                "John Doe enrolled in Physics 101",
                "New teacher added: Mrs. Grace",
                "System update scheduled for 12 Oct",
                "98% attendance recorded this week",
              ].map((activity, i) => (
                <li
                  key={i}
                  className="flex flex-wrap items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2"
                >
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {activity}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 sm:mt-0">
                    {i + 1}h ago
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
