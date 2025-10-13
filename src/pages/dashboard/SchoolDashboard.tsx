import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

const SchoolDashboard = () => {
  return (
    <DashboardLayout role="school">
      <Routes>
        <Route
          index
          element={<h2 className="text-2xl font-bold">School Overview 🏫</h2>}
        />
        <Route path="teachers" element={<p>Manage Teachers Here 👩‍🏫</p>} />
        <Route path="students" element={<p>Manage Students Here 🎓</p>} />
        <Route path="settings" element={<p>School Settings ⚙️</p>} />
      </Routes>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
