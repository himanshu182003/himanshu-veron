import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, BrainCircuit, Rocket, Zap, HeartPulse, Infinity } from 'lucide-react';

const Feature_2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MediTrack?</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-2xl mx-auto">
            Discover the unique advantages that make us the preferred choice for modern healthcare management
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Military-Grade Security",
              description: "Bank-level encryption and blockchain technology protect your sensitive health data"
            },
            {
              icon: <BrainCircuit className="w-8 h-8" />,
              title: "AI-Powered Insights",
              description: "Predictive analytics and intelligent disease detection powered by cutting-edge AI"
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Lightning Fast Results",
              description: "Instant report generation and real-time appointment tracking system"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "24/7 Availability",
              description: "Round-the-clock access to your medical records and virtual consultations"
            },
            {
              icon: <HeartPulse className="w-8 h-8" />,
              title: "Health Monitoring",
              description: "Continuous vital tracking and personalized health recommendations"
            },
            {
              icon: <Infinity className="w-8 h-8" />,
              title: "Seamless Integration",
              description: "Connect with hospitals, labs, and wearables in one unified platform"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <div className="mt-4 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full 
            shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
          >
            Start Your Health Journey
            <Zap className="w-5 h-5 ml-3 fill-current" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature_2;