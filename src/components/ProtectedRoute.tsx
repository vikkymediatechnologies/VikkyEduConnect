// src/components/PrivateRoute.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const PrivateRoute = ({ children, allowedRoles }: PrivateRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, userRole } = useAuth();

  // fallback for persistence
  const savedRole = localStorage.getItem("userRole");
  const role = userRole || savedRole;

  // ⛔ Not logged in → go to signin
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // 🧩 Role-based restriction
  if (allowedRoles && !allowedRoles.includes(role || "")) {
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
  }

  // ✅ Authorized and logged in
  return <>{children}</>;
};

export default PrivateRoute;
