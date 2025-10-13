import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

const TeacherDashboard = () => {
  return (
    <DashboardLayout role="teacher">
      <Routes>
        <Route
          index
          element={<h2 className="text-2xl font-bold">My Classes 📚</h2>}
        />
        <Route path="assignments" element={<p>Assignments Page ✏️</p>} />
        <Route path="progress" element={<p>Progress Tracker 📈</p>} />
        <Route path="settings" element={<p>Account Settings ⚙️</p>} />
      </Routes>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
