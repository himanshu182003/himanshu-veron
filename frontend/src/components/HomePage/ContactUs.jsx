import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageSquareText,
  Stethoscope,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    // Add your form submission logic here
  };

  const contactVariants = {
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

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden" id="contact">
      {/* DNA Strand Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 w-1 h-full bg-gradient-to-b from-blue-600/20 to-cyan-500/20 animate-dna-pulse" />
        <div className="absolute right-1/4 w-1 h-full bg-gradient-to-b from-cyan-500/20 to-blue-600/20 animate-dna-pulse-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={contactVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </div>
            
            <p className="text-gray-300 text-lg">
              Have questions or need support? Our team is here to help you with 
              any medical inquiries or technical assistance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Emergency Support</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-cyan-400 mt-2">24/7 Availability</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">General Inquiries</h4>
                  <p className="text-gray-300">support@meditrack.com</p>
                  <p className="text-sm text-cyan-400 mt-2">Typically replies within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Headquarters</h4>
                  <p className="text-gray-300">123 Health Tech Park</p>
                  <p className="text-gray-300">MedCity, MC 45678</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 text-gray-300 hover:text-blue-400"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <div className="flex items-center mb-8">
              <Stethoscope className="w-8 h-8 text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Medical Inquiry Form</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <User className="w-5 h-5" />
                  <span>Full Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400"
                  placeholder="Dr. John Smith"
                />
                {errors.name && <span className="text-red-400 text-sm">This field is required</span>}
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400"
                  placeholder="john@meditrack.com"
                />
                {errors.email && <span className="text-red-400 text-sm">This field is required</span>}
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <MessageSquareText className="w-5 h-5" />
                  <span>Message</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400"
                  placeholder="Describe your medical inquiry..."
                />
                {errors.message && <span className="text-red-400 text-sm">This field is required</span>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg 
                shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
              >
                Message sent successfully! We'll respond within 24 hours.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Map Illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 pointer-events-none">
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse" />
        <MapPin className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 text-blue-400 animate-bounce" />
      </div>
    </section>
  );
};

export default ContactUs;