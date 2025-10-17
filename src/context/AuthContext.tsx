

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
  userRole: string | null;
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  userRole: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();

  // ✅ On app load: check if there's an active session
  useEffect(() => {
    const activeUser = localStorage.getItem("activeUser");
    const role = localStorage.getItem("userRole");

    if (activeUser && role) {
      setUser(JSON.parse(activeUser));
      setUserRole(role);
      setIsAuthenticated(true);
    }
  }, []);

  // ✅ Called from Signin.tsx after successful login
  const login = (role: string) => {
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser) {
      setUser(JSON.parse(activeUser));
      setUserRole(role);
      setIsAuthenticated(true);
    }
  };

  // ✅ Logout logic
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserRole(null);
    localStorage.removeItem("activeUser");
    localStorage.removeItem("userRole");

    toast.success("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
