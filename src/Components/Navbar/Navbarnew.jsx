import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Menu, X, LogOut, User } from "lucide-react";

export const Navbarnew = () => {
  const userName = null;
  const adminName = null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(".navbar .link", {
      opacity: 0,
      y: "-50px",
    }, {
      opacity: 1,
      y: "0px",
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="link flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Quizee
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="link text-gray-600 hover:text-blue-600 font-semibold transition-colors">
            Home
          </Link>
          <Link to="/quiz" className="link text-gray-600 hover:text-blue-600 font-semibold transition-colors">
            Quizzes
          </Link>
          <a href="#features" className="link text-gray-600 hover:text-blue-600 font-semibold transition-colors">
            Features
          </a>
          <a href="#contact" className="link text-gray-600 hover:text-blue-600 font-semibold transition-colors">
            Contact
          </a>
        </motion.div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {userName !== null || adminName !== null ? (
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
              >
                <User size={20} className="text-blue-600" />
                <span className="font-semibold text-gray-900">{userName || adminName}</span>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold"
              >
                <LogOut size={20} />
                Logout
              </motion.button>
            </div>
          ) : (
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-6 py-2 font-semibold shadow-lg"
              >
                SIGN IN
              </motion.button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <motion.div className="px-4 py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="text-gray-600 hover:text-blue-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Quizzes
          </Link>
          <a href="#features" className="text-gray-600 hover:text-blue-600 font-semibold py-2">
            Features
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 font-semibold py-2">
            Contact
          </a>

          {userName !== null || adminName !== null ? (
            <div className="flex flex-col gap-2 pt-4 border-t">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <User size={20} className="text-blue-600" />
                <span className="font-semibold text-gray-900">{userName || adminName}</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="pt-4 border-t"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient w-full px-6 py-2 font-semibold"
              >
                SIGN IN
              </motion.button>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
