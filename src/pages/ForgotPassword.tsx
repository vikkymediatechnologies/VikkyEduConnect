import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [isResending, setIsResending] = useState(false);

  // Countdown for resend
  useEffect(() => {
    if (!isSubmitted) return;
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast.success("Reset link sent!", {
        description: "Check your email for password reset instructions.",
      });
    }, 1500);
  };

  const handleResendEmail = () => {
    if (seconds === 0) {
      setIsResending(true);
      setTimeout(() => {
        setSeconds(59);
        setIsResending(false);
        toast.success("We've sent you another confirmation email.");
      }, 1000);
    }
  };

  // ✅ Shared Header (Logo + Right-Side Title on same line)
  const Header = () => (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background border-b border-border shadow-sm">
      <Link to="/signin" className="flex items-center space-x-2">
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
        Forgot Password
      </span>
    </header>
  );

  // ✅ After submission (success message view)
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl bg-card rounded-2xl px-8 py-12 shadow-xl border border-border text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Check Your Email
            </h2>
            <p className="text-muted-foreground mb-8">
              A password reset link has been sent to{" "}
              <strong className="text-primary">{email}</strong>.
            </p>

            {seconds > 0 ? (
              <p className="text-sm text-muted-foreground">
                Didn’t receive the email?{" "}
                <span className="text-primary font-medium">
                  Resend in {seconds}s
                </span>
              </p>
            ) : (
              <button
                onClick={handleResendEmail}
                className="text-sm text-primary font-medium hover:underline"
                disabled={isResending}
              >
                {isResending ? "Resending..." : "Resend Email"}
              </button>
            )}

            <div className="mt-8">
              <Link to="/signin">
                <Button className="w-full">Back to Sign In</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ✅ Default form (before submission)
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Forgot Password
            </h1>
            <p className="text-muted-foreground">
              Enter your email and we’ll send you a reset link.
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
                placeholder="email@sample.com"
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Reset Link"}
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

export default ForgotPassword;
