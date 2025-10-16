import DashboardLayout from "@/layouts/DashboardLayout";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-darkText">
        🎓 Student Dashboard
      </h1>
      <p className="text-gray-600 mt-2">Welcome! View your classes and assignments.</p>
    </DashboardLayout>
  );
};

export default StudentDashboard;
