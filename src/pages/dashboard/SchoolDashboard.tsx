import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const SchoolDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState([
    { icon: <Users size={22} />, label: "Total Teachers", value: 0 },
    { icon: <GraduationCap size={22} />, label: "Total Students", value: 0 },
    { icon: <BookOpen size={22} />, label: "Active Courses", value: 0 },
  ]);

  const [activities, setActivities] = useState<any[]>([]);

  // Simulate fetching data from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats([
        { icon: <Users size={22} />, label: "Total Teachers", value: 42 },
        { icon: <GraduationCap size={22} />, label: "Total Students", value: 310 },
        { icon: <BookOpen size={22} />, label: "Active Courses", value: 18 },
      ]);

      setActivities([
        { id: 1, text: "New student added: John Doe", time: "2 mins ago" },
        { id: 2, text: "Teacher Sarah updated Chemistry course", time: "10 mins ago" },
        { id: 3, text: "New course created: Basic Programming", time: "25 mins ago" },
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { name: "Teachers", count: 42 },
    { name: "Students", count: 310 },
    { name: "Courses", count: 18 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ✅ Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Welcome back, <span className="text-primary">Vikky High School</span> 🎓
            </h1>
            <p className="text-muted-foreground">
              Manage teachers, students, and courses efficiently.
            </p>
          </div>

          <Button
            className="flex items-center gap-2"
            onClick={() => navigate("/dashboard/settings")}
          >
            <Settings size={16} /> Settings
          </Button>
        </motion.div>

        {/* ✅ Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  {stat.icon}
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* ✅ Chart Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" /> Analytics Overview
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/dashboard/reports")}
            >
              View Report
            </Button>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* ✅ Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold mb-2">👩‍🏫 Manage Teachers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add or remove teachers and assign them to classes.
            </p>
            <Button variant="outline" onClick={() => navigate("/dashboard/teachers")}>
              Go to Teachers <ArrowRight size={16} />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold mb-2">🎒 Manage Students</h3>
            <p className="text-sm text-muted-foreground mb-4">
              View student profiles, attendance, and performance.
            </p>
            <Button variant="outline" onClick={() => navigate("/dashboard/students")}>
              Go to Students <ArrowRight size={16} />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold mb-2">📚 Manage Courses</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create and manage subjects, schedules, and course materials.
            </p>
            <Button variant="outline" onClick={() => navigate("/dashboard/courses")}>
              Go to Courses <ArrowRight size={16} />
            </Button>
          </Card>
        </div>

        {/* ✅ Recent Activities */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
              >
                <span>{activity.text}</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;

