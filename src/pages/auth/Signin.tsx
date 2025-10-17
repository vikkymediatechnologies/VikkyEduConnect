// src/pages/auth/Signin.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const Signin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    toast.error("Please enter both email and password.");
    return;
  }

  // ✅ Get all users from localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // ✅ Find the user by email
  const user = users.find((u: any) => u.email === form.email);

  if (!user) {
    toast.error("No account found with this email. Please sign up first.");
    return;
  }

  // ✅ Check password
  if (user.password !== form.password) {
    toast.error("Invalid password.");
    return;
  }

  toast.success(`You are successfully logged in as ${user.role}! 🎉`);
  setLoading(true);

  // ✅ Save role + active user session
  localStorage.setItem("userRole", user.role);
  localStorage.setItem("activeUser", JSON.stringify(user));

  // ✅ Update AuthContext
  await login(user.role);

  // ✅ Redirect based on role
  setTimeout(() => {
    if (user.role === "school" || user.role === "admin") {
      navigate("/dashboard/school");
    } else if (user.role === "teacher") {
      navigate("/dashboard/teacher");
    } else if (user.role === "student") {
      navigate("/dashboard/student");
    } else {
      navigate("/");
    }
    setLoading(false);
  }, 800);
};


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!form.email || !form.password) {
  //     toast.error("Please enter both email and password.");
  //     return;
  //   }

  //   // ✅ Get user from localStorage
  //   const storedUser = localStorage.getItem("user");
  //   if (!storedUser) {
  //     toast.error("No account found. Please sign up first.");
  //     return;
  //   }

  //   const user = JSON.parse(storedUser);

  //   // ✅ Check email and password
  //   if (user.email !== form.email || user.password !== form.password) {
  //     toast.error("Invalid email or password.");
  //     return;
  //   }

  //   toast.success("Login successful!");
  //   setLoading(true);

  //   // ✅ Save role in localStorage for dashboard redirect
  //   localStorage.setItem("role", user.role);

  //   // ✅ Update AuthContext
  //   await login(user.role);

  //   setTimeout(() => {
  //     if (user.role === "school" || user.role === "admin") {
  //       navigate("/dashboard/school");
  //     } else if (user.role === "teacher") {
  //       navigate("/dashboard/teacher");
  //     } else if (user.role === "student") {
  //       navigate("/dashboard/student");
  //     } else {
  //       navigate("/");
  //     }
  //     setLoading(false);
  //   }, 500);
  // };

  const Header = () => (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background border-b border-border shadow-sm">
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
      <span className="text-sm md:text-base font-medium text-muted-foreground">
        Sign In
      </span>
    </header>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center md:justify-start"
            >
              <motion.img
                src="/src/assets/undraw_real-time-collaboration_bchs.png"
                alt="Learning Illustration"
                className="w-7 md:w-14"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.h1
              className="text-4xl font-extrabold text-foreground leading-tight flex flex-wrap gap-2 justify-center md:justify-start"
              initial="hidden"
              animate="show"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Welcome
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-primary"
              >
                Back
              </motion.span>
            </motion.h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Continue your journey with{" "}
              <span className="font-semibold">VikkyEduConnect</span>. Access your
              courses, track progress, and connect with learners worldwide 🌍.
            </p>
          </div>

          {/* Right Side - Signin Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-2xl shadow-xl border border-border"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Sign In</h2>
              <p className="mt-2 text-muted-foreground">
                Enter your credentials to continue
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
                  placeholder="Enter your email"
                  className="mt-1"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Create one
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
