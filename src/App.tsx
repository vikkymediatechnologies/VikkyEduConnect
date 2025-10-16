import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";

// ✅ Pages
import Index from "./pages/Index";
import NotFound from "./pages/auth/NotFound";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// ✅ Dashboards
import SchoolDashboard from "./pages/dashboard/SchoolDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";

// ✅ PrivateRoute
import PrivateRoute from "@/components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ Wrap everything inside AuthProvider */}
        <AuthProvider>
          <Routes>
            {/* 🌍 Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* 🔒 Protected Dashboards */}
            <Route
              path="/dashboard/school/*"
              element={
                <PrivateRoute allowedRoles={["admin", "school"]}>
                  <SchoolDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/teacher/*"
              element={
                <PrivateRoute allowedRoles={["teacher"]}>
                  <TeacherDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/student/*"
              element={
                <PrivateRoute allowedRoles={["student"]}>
                  <StudentDashboard />
                </PrivateRoute>
              }
            />

            {/* 🚀 Role-based redirect entry */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <RoleRedirect />
                </PrivateRoute>
              }
            />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

/* ✅ RoleRedirect Component */
const RoleRedirect = () => {
  const { userRole } = useAuth(); // <-- get the role from context first
  const localRole = localStorage.getItem("userRole"); // fallback if context is empty
  const role = userRole || localRole;

  switch (role) {
    case "school":
    case "admin":
      return <Navigate to="/dashboard/school" replace />;
    case "teacher":
      return <Navigate to="/dashboard/teacher" replace />;
    case "student":
      return <Navigate to="/dashboard/student" replace />;
    default:
      return <Navigate to="/signin" replace />;
  }
};

export default App;
