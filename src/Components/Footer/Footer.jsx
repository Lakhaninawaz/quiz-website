import gsap from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {

  useEffect(() => {
    gsap.fromTo(".footer p",
      {
        opacity: 0,
        y: "-50px",
      },
      {
        opacity: 1,
        y: "0px",
        duration: 0.5,
      });
  }, []);

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "About", links: ["About Us", "Our Mission", "Team"] },
    { title: "Product", links: ["Features", "Pricing", "Security"] },
    { title: "Resources", links: ["Blog", "Documentation", "FAQ"] },
    { title: "Legal", links: ["Privacy", "Terms of Service", "Cookie Policy"] }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="footer bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Quizee
            </h3>
            <p className="text-gray-400 mb-4">
              Making learning interactive and fun with modern quizzes
            </p>
            {/* Newsletter Signup */}
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-2">
              <Mail size={20} className="text-blue-400" />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-white placeholder-gray-500 flex-1 outline-none text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 hover:text-blue-300 font-bold text-lg"
              >
                →
              </motion.button>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Middle Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-700"
        >
          <div className="flex items-start gap-4">
            <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-semibold">support@quizee.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-semibold">San Francisco, CA</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Copyright */}
          <p className="footer text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Quizee. All rights reserved. Made with ❤️ by Nawaz
          </p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={`#${social.label.toLowerCase()}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all opacity-0 hover:opacity-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↑
      </motion.button>
    </motion.footer>
  );
};
