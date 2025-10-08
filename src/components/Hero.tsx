import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/education-hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const stats = [
    { number: "1000+", label: "Students Learning Code" },
    { number: "50+", label: "Schools Connected" },
    { number: "95%", label: "Skill Improvement" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-white mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="text-xs sm:text-sm font-medium">
              💻 Learn Programming in School
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
            variants={itemVariants}
          >
            Learn Programming
            <span className="block text-lg sm:text-2xl lg:text-3xl mt-2 text-white/90">
              Made Simple for Students
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Start your coding journey with interactive lessons designed for school students
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button size="lg" className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Play className="mr-2 w-4 h-4" />
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
