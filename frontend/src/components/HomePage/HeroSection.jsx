import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, User } from 'lucide-react';
import video from '../../assets/medical-bg.mp4';

const HeroSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/medical-poster.jpg" // Add a fallback poster image
        >
          <source src={video} type="video/mp4" />
          <source src="/medical-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transforming Healthcare Through
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Your comprehensive health companion for predictive care, seamless appointments, 
            and secure medical records management.
          </motion.p>

          <motion.div variants={slideUpVariants}>
            <Link
              to="/login-register"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
            >
              Get Started Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            { icon: <User className="w-12 h-12" />, value: "50k+", label: "Active Patients" },
            { icon: <Stethoscope className="w-12 h-12" />, value: "200+", label: "Expert Doctors" },
            { icon: <Activity className="w-12 h-12" />, value: "98%", label: "Accuracy Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={slideUpVariants}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-blue-400 mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;