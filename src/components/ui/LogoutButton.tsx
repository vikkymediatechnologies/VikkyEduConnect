import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Button
      onClick={logout}
      variant="destructive"
      className="flex items-center gap-2 px-4 py-2"
    >
      <LogOut size={18} />
      Logout
    </Button>
  );
};

export default LogoutButton;
