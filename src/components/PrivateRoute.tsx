import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = localStorage.getItem("user");

  if (!isAuthenticated || !user) {
    // 🚫 If no auth data, redirect to Signin
    return <Navigate to="/signin" replace />;
  }

  try {
    const parsedUser = JSON.parse(user);

    // ✅ Optional: Add simple role check (future expansion)
    if (!parsedUser.role) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      return <Navigate to="/signin" replace />;
    }

    // ✅ Everything good → render child component (dashboard)
    return <>{children}</>;
  } catch (error) {
    console.error("Invalid user data in localStorage", error);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    return <Navigate to="/signin" replace />;
  }
};

export default PrivateRoute;
