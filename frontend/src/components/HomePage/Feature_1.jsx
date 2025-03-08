import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrainCircuit, ShieldCheck, HeartPulse, Cloud } from 'lucide-react';

const Feature_1 = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideVariants = {
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[size:40px_40px] bg-grid-white/[0.05]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="space-y-8 relative z-10"
          >
            <motion.div
              variants={slideVariants}
              className="text-4xl sm:text-5xl font-bold"
            >
              <h2 className="text-white mb-4">
                Revolutionizing Healthcare with
              </h2>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent Solutions
              </div>
            </motion.div>

            <motion.p
              variants={slideVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              MediTrack harnesses cutting-edge AI and blockchain technology to 
              deliver a seamless healthcare experience. From predictive diagnostics 
              to secure medical records, we're redefining patient care for the 
              digital age.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <BrainCircuit className="w-8 h-8" />, title: "AI-Powered Predictions" },
                { icon: <ShieldCheck className="w-8 h-8" />, title: "Military-Grade Security" },
                { icon: <HeartPulse className="w-8 h-8" />, title: "Real-Time Monitoring" },
                { icon: <Cloud className="w-8 h-8" />, title: "Cloud Integration" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={slideVariants}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-blue-400 mb-2">{feature.icon}</div>
                  <div className="text-white font-medium">{feature.title}</div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={slideVariants}>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                Discover More
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Name Display */}
          <motion.div
            initial="right"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideVariants}
            className="relative flex items-center justify-center min-h-[400px]"
          >
            {/* Floating Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
            
            {/* Project Name Display */}
            <div className="relative z-10 text-center">
              <div className="text-[120px] lg:text-[150px] xl:text-[180px] font-bold leading-none">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  MEDI
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  TRACK
                </span>
              </div>
              <div className="text-lg text-gray-300 mt-4 uppercase tracking-widest">
                The Future of Healthcare
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature_1;
