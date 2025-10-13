import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AuthHeader = ({ title }: { title?: string }) => {
  return (
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

      {/* ✅ This shows your page title (like Forgot Password) */}
      {title && (
        <span className="text-sm md:text-base font-medium text-muted-foreground">
          {title}
        </span>
      )}
    </header>
  );
};

export default AuthHeader;
