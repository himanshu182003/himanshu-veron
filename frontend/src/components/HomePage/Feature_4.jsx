import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, User } from 'lucide-react';

const Feature_4 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Testimonial data
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Diabetes Patient",
      avatar: "https://i.pravatar.cc/150?img=31",
      rating: 5,
      text: "MediTrack transformed how I manage my health. The predictive alerts helped catch potential issues early!"
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      avatar: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      text: "An essential tool for modern healthcare. The patient monitoring features are revolutionary."
    },
    {
      name: "Sarah Thompson",
      role: "Chronic Care Manager",
      avatar: "https://i.pravatar.cc/150?img=28",
      rating: 5,
      text: "The community support and AI insights have been life-changing for my chronic condition management."
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        <Quote className="absolute top-20 left-20 w-48 h-48 text-blue-600/20" />
        <Star className="absolute bottom-20 right-20 w-48 h-48 text-cyan-500/20" />
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
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Thousands</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-2xl mx-auto">
            Discover why patients and professionals alike love MediTrack's innovative approach to healthcare
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
            >
              {/* Rating Stars */}
              <div className="flex mb-4 space-x-1 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/20" />
                <p className="text-gray-200 italic">"{testimonial.text}"</p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="mb-8 text-gray-300">
            Join 50,000+ satisfied users transforming their healthcare experience
          </div>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full 
            shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
          >
            Share Your Experience
            <User className="w-5 h-5 ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature_4;