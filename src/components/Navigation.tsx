import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", path: "features" },
    { name: "Pricing", path: "pricing" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md transition-transform group-hover:rotate-6">
              <User className="w-5 h-5 text-white" strokeWidth={2.3} />
            </div>
            <span className="text-xl font-bold text-foreground">
              VikkyEduConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={800} // slightly slower for elegance
                spy={true}
                offset={-64}
                activeClass="text-primary after:w-full"
                ease="easeInOutCubic"
                className="cursor-pointer relative font-medium text-muted-foreground transition-colors duration-300 ease-in-out hover:text-primary 
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center">
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-md"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.path}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-64}
                  ease="easeInOutCubic"
                  activeClass="text-primary after:w-full"
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer relative text-lg font-medium text-muted-foreground py-2 px-4 rounded-md hover:text-primary transition-colors 
                             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 
                             hover:after:w-full"
                >
                  {link.name}
                </ScrollLink>
              ))}

              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
