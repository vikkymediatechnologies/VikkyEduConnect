import DashboardLayout from "@/layouts/DashboardLayout";

const TeacherDashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-darkText">
        👩‍🏫 Teacher Dashboard
      </h1>
      <p className="text-gray-600 mt-2">Welcome! Manage classes, students, and performance.</p>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
