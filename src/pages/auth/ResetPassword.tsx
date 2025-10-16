import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    // Simulate API reset request
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password reset successful!", {
        description: "You can now log in with your new password.",
      });
      navigate("/signin");
    }, 1500);
  };

  // ✅ Reusable header (logo + right-side title)
  const Header = () => (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background border-b border-border shadow-sm">
      {/* Left side: Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <motion.img
          src="/src/assets/undraw_real-time-collaboration_bchs.png"
          alt="Logo"
          className="w-8 h-8 md:w-10 md:h-10"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <span className="text-lg md:text-xl font-semibold text-primary">
          VikkyEduConnect
        </span>
      </Link>

      {/* ✅ Right side text */}
      <span className="text-sm md:text-base font-medium text-muted-foreground">
        Reset Password
      </span>
    </header>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ✅ Single header (with logo + text on the same bar) */}
      <Header />

      {/* ✅ Main content */}
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Set a New Password
            </h1>
            <p className="text-muted-foreground">
              Enter your new password to complete the reset process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="email@sample.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">
                New Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter new password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password_confirmation" className="text-foreground">
                Confirm Password
              </Label>
              <Input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Confirm new password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            {/* ✅ Button matches Signin style */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>

            <div className="text-center text-sm mt-4">
              <p>
                Remember password?{" "}
                <Link to="/signin" className="text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPassword;
