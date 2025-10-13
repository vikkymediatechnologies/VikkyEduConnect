import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Signin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.email || !form.password || !form.role) {
      toast.error("All fields are required, including role.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    // ✅ Simulate login success
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({ email: form.email, role: form.role })
      );

      toast.success("Signed in successfully!");

      // ✅ Redirect based on role
      if (form.role === "school") navigate("/dashboard/school");
      else if (form.role === "teacher") navigate("/dashboard/teacher");
      else navigate("/dashboard/student");

      setLoading(false);
    }, 1000);
  };

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

              <div>
                <Label htmlFor="role" className="text-foreground">
                  Select Role
                </Label>
                <select
                  id="role"
                  value={form.role}
                  onChange={handleChange}
                  className="mt-1 w-full border border-border rounded-md p-2 bg-background text-foreground"
                  required
                >
                  <option value="">-- Choose Role --</option>
                  <option value="school">School</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
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
