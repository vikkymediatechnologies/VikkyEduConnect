

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // e.g. ["admin", "teacher"]
}

const PrivateRoute = ({ children, allowedRoles }: PrivateRouteProps) => {
  const { isAuthenticated, user, userRole } = useAuth();
  const location = useLocation();

  // ✅ Get role (context or localStorage fallback)
  const role = userRole || user?.role || localStorage.getItem("userRole");

  // ⛔ Not logged in — redirect to signin
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // 🧩 Role-based access control
  if (allowedRoles && !allowedRoles.includes(role || "")) {
    // redirect to correct dashboard based on user's role
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

  // ✅ Authorized — allow access
  return <>{children}</>;
};

export default PrivateRoute;
