import { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!user.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = "Email is invalid";
    if (!user.password) newErrors.password = "Password is required";
    else if (user.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleLogin = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Login successful:", user);
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    gsap.fromTo(".login-container", {
      opacity: 0,
      y: 50,
      scale: 0.95,
    }, {
      duration: 0.8,
      ease: "power2.inOut",
      opacity: 1,
      y: 0,
      scale: 1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue learning</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="login-container card p-8 md:p-10 shadow-2xl"
        >
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 pl-12 rounded-lg border-2 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'} focus:outline-none`}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-2"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 pl-12 pr-12 rounded-lg border-2 transition-colors ${errors.password ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'} focus:outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-2"
              >
                {errors.password}
              </motion.p>
            )}
          </motion.div>

          {/* Forgot Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 flex justify-end"
          >
            <a href="#forgot" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
              Forgot password?
            </a>
          </motion.div>

          {/* Login Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogin}
            className="btn-gradient w-full mb-4 flex items-center justify-center gap-2 font-bold shadow-lg"
          >
            Sign In
            <ArrowRight size={20} />
          </motion.button>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 my-6"
          >
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-600 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </motion.div>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn px-6 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold transition-colors"
              >
                Create New Account
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Login (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 text-sm mb-4">Or continue with</p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">f</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">G</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          By signing in, you agree to our{" "}
          <a href="#terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
        </motion.p>
      </div>
    </div>
  );
};
