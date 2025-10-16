// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // ✅ On app load: check if user exists in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // ✅ Login logic
  const login = (email: string, password: string) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      toast.error("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.email === email && userData.password === password) {
      setUser(userData);
      setIsAuthenticated(true);
      toast.success("Login successful!");

      // redirect based on saved role
      switch (userData.role) {
        case "school":
        case "admin":
          navigate("/dashboard/school");
          break;
        case "teacher":
          navigate("/dashboard/teacher");
          break;
        case "student":
          navigate("/dashboard/student");
          break;
        default:
          navigate("/signin");
      }
    } else {
      toast.error("Invalid email or password.");
    }
  };

  // ✅ Logout logic
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
