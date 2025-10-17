import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, Variants } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // default
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.password || !form.confirmPassword) {
    toast.error("All fields are required.");
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

  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  // ✅ Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // ✅ Check if email already exists
  const existingUser = users.find((u: any) => u.email === form.email);
  if (existingUser) {
    toast.error("An account with this email already exists.");
    return;
  }

  // ✅ Create new user
  const newUser = {
    name: form.name,
    email: form.email,
    password: form.password,
    role: form.role,
  };

  // ✅ Save updated users array
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully! Redirecting to login...");
  setTimeout(() => navigate("/signin"), 1500);
};


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//       toast.error("All fields are required.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(form.email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     if (form.password.length < 6) {
//       toast.error("Password must be at least 6 characters long.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     // ✅ Get existing users
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     // ✅ Check if email already exists
//     const existingUser = users.find((u: any) => u.email === form.email);
//     if (existingUser) {
//       toast.error("An account with this email already exists.");
//       return;
//     }

//     // ✅ Save new user with all details (including password & role)
//     const newUser = {
//       name: form.name,
//       email: form.email,
//       password: form.password,
//       role: form.role,
//     };
//     users.push(newUser);
// localStorage.setItem(
//   "user",
//   JSON.stringify({
//     name: form.name,
//     email: form.email,
//     password: form.password, // ✅ added
//     role: form.role,
//   })
// );


//     toast.success("Account created successfully! Redirecting to login...");
//     setTimeout(() => navigate("/signin"), 1500);
//   };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <motion.img
            src="/src/assets/undraw_real-time-collaboration_bchs.png"
            alt="VikkyEduConnect Logo"
            className="w-8 md:w-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="text-xl font-bold text-foreground">VikkyEduConnect</h1>
        </div>

        <Link to="/signin">
          <Button variant="outline" className="text-sm">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-6 pt-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              className="text-4xl font-extrabold text-foreground leading-tight flex flex-wrap gap-2 justify-center md:justify-start"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {["Join", "VikkyEduConnect"].map((wordText, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className={i === 1 ? "text-primary" : ""}
                >
                  {wordText}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Unlock your learning journey with{" "}
              <span className="font-semibold">VikkyEduConnect</span>. Access
              courses, track progress, and connect with a vibrant community of
              learners.
            </p>
            <p className="text-sm text-muted-foreground">
              Sign up now and start building your future today 🚀
            </p>
          </div>

          {/* Right - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-2xl shadow-xl border border-border"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Create Your Account
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill in your details to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

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
                  placeholder="Create a password"
                  className="mt-1"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-foreground">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1"
                  value={form.confirmPassword}
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
                  className="mt-1 w-full p-2 rounded-md border border-border bg-background text-foreground"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option value="school">School</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
