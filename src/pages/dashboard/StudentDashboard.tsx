import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

const StudentDashboard = () => {
  return (
    <DashboardLayout role="student">
      <Routes>
        <Route
          index
          element={<h2 className="text-2xl font-bold">My Courses 🎓</h2>}
        />
        <Route path="progress" element={<p>Progress Page 📈</p>} />
        <Route path="assignments" element={<p>Assignments 🧾</p>} />
        <Route path="settings" element={<p>Student Settings ⚙️</p>} />
      </Routes>
    </DashboardLayout>
  );
};

export default StudentDashboard;
