/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Zap, Brain, Trophy, BarChart3, Users, Sparkles } from "lucide-react";

export const Home = () => {
  const userId = false;

  useEffect(() => {
    gsap.fromTo(".home", {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  const features = [
    {
      icon: <Brain className="text-blue-500" size={40} />,
      title: "Smart Questions",
      description: "AI-powered questions covering various topics and difficulty levels"
    },
    {
      icon: <Zap className="text-yellow-500" size={40} />,
      title: "Instant Feedback",
      description: "Get real-time feedback on your answers with detailed explanations"
    },
    {
      icon: <Trophy className="text-yellow-600" size={40} />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and statistics"
    },
    {
      icon: <BarChart3 className="text-purple-500" size={40} />,
      title: "Performance Stats",
      description: "Visualize your learning journey with comprehensive reports"
    },
    {
      icon: <Users className="text-pink-500" size={40} />,
      title: "Community",
      description: "Learn and compete with thousands of learners worldwide"
    },
    {
      icon: <Sparkles className="text-green-500" size={40} />,
      title: "Badges & Rewards",
      description: "Earn badges and unlock achievements as you progress"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Quiz Questions" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Topics Covered" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="home min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden pt-20 pb-32 px-4 md:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🚀 Welcome to Quizee
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
          >
            Master Knowledge with
            <br />
            <span className="text-gradient">Interactive Quizzes</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium"
          >
            Challenge yourself, learn faster, and track your progress with our modern quiz platform
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <NavLink to={!userId ? "/quiz" : "/register"} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl transition-all"
              >
                Start Quiz Now →
              </motion.button>
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-bold border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</p>
                <p className="text-gray-600 mt-2 text-sm md:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-4 md:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Quizee?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Experience the most interactive way to learn and test your knowledge
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 transition-all hover:border-blue-200"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="flex justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-4 md:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Ready to Level Up?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 mb-10 font-medium"
          >
            Join thousands of learners and start your learning journey today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <NavLink to={!userId ? "/quiz" : "/register"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all text-lg"
              >
                Start Your Quiz Journey
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
