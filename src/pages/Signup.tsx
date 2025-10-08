import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { motion, Variants } from "framer-motion";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast.error("All fields are required.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    toast.success("Account created successfully!");
  };

  // ✅ Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Project Info & Animated Illustration */}
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
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Animated Heading */}
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
            <span className="font-semibold">VikkyEduConnect</span>.  
            Access courses, track progress, and connect with a vibrant community of learners.
          </p>
          <p className="text-sm text-muted-foreground">
            Sign up now and start building your future today 🚀
          </p>
        </div>

        {/* Right Side - Signup Form */}
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
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
