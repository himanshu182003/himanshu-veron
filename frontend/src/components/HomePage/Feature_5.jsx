import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck,
  Syringe,
  Activity,
  HeartPulse,
  ChevronDown,
  BrainCircuit,
  PhoneCall,
  BadgeHelp
} from 'lucide-react';

const Feature_5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How does the disease prediction work?",
      answer: "Our AI analyzes your symptoms and medical history using advanced machine learning models trained on millions of clinical cases, providing accurate preliminary assessments.",
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      question: "Is my medical data secure?",
      answer: "We use military-grade encryption and blockchain technology to ensure your health data remains completely private and secure.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      question: "Can I share reports with my doctor?",
      answer: "Yes! Easily share encrypted medical reports and prescriptions through secure links or direct integration with hospital systems.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      question: "How accurate are the health insights?",
      answer: "Our algorithms achieve 98.7% clinical accuracy, validated through partnerships with leading medical institutions.",
      icon: <HeartPulse className="w-6 h-6" />
    }
  ];

  const stats = [
    { value: "98.7%", label: "Prediction Accuracy", icon: <Syringe className="w-8 h-8" /> },
    { value: "256-bit", label: "Data Encryption", icon: <BadgeHelp className="w-8 h-8" /> },
    { value: "24/7", label: "Support Available", icon: <PhoneCall className="w-8 h-8" /> }
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Floating Medical Icons */}
      <div className="absolute inset-0 opacity-5">
        <ShieldCheck className="absolute top-1/4 left-20 w-32 h-32 animate-float" />
        <HeartPulse className="absolute bottom-20 right-40 w-28 h-28 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Your Questions,
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Answered</span>
          </motion.h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Get quick answers to common queries about our platform and services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Creative Stats Cards */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-400">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated FAQ Accordion */}
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-white font-medium">{item.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creative CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mb-6 text-gray-300">
            Still have questions? We're here to help!
          </div>
          <div className="flex justify-center space-x-6">
            <button className="flex items-center px-6 py-3 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-600/40 transition-all">
              <PhoneCall className="w-5 h-5 mr-2" />
              Live Chat
            </button>
            <button className="flex items-center px-6 py-3 bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-600/40 transition-all">
              <BadgeHelp className="w-5 h-5 mr-2" />
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature_5;

