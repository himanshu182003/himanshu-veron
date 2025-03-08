import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Stethoscope,
  HeartPulse,
  CalendarCheck,
  ClipboardList,
  Users,
  MessageCircle,
  Mail,
  HelpCircle,
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Disease Prediction', path: '/prediction', icon: <HeartPulse className="w-5 h-5" /> },
    { name: 'Appointments', path: '/appointments', icon: <CalendarCheck className="w-5 h-5" /> },
    { name: 'Reports', path: '/reports', icon: <ClipboardList className="w-5 h-5" /> },
    { name: 'Community', path: '/community', icon: <Users className="w-5 h-5" /> },
    { name: 'Feedback', path: '/feedback', icon: <MessageCircle className="w-5 h-5" /> },
    { name: 'Contact Us', path: '/contact', icon: <Mail className="w-5 h-5" /> },
    { name: 'About Us', path: '/about', icon: <HelpCircle className="w-5 h-5" /> },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="text-blue-600 w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              MediTrack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1.5 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                {item.icon}
                <span className="font-medium group-hover:underline decoration-2 underline-offset-4">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/login-register"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden absolute w-full bg-white/95 backdrop-blur-sm border-b"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 p-2 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={itemVariants}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4 border-t border-gray-100"
                  >
                    <Link
                      to="/login-register"
                      className="w-full flex justify-center items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;