import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Signup Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-base-200">
        <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-base-content/40 size-5" />
                <input
                  type="text"
                  className="input input-bordered w-full pl-10"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-base-content/40 size-5" />
                <input
                  type="email"
                  className="input input-bordered w-full pl-10"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-base-content/40 size-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 pr-10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-base-content/40"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

       {/* Right Side - Custom Design */}
      <div className="hidden lg:flex items-center justify-center relative bg-gradient-to-br from-purple-500 to-purple-700">
        {/* Concentric Circles */}
        <div className="relative flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-purple-400/40 absolute"></div>
          <div className="w-60 h-60 rounded-full bg-purple-300/40 absolute"></div>
          <div className="w-40 h-40 rounded-full bg-purple-200/50 flex items-center justify-center z-10">
            <User className="w-12 h-12 text-purple-700" />
          </div>

          {/* Avatars in circular orbit */}
          <div className="absolute w-[22rem] h-[22rem] rounded-full">
            <img
              src="/user1.jpg"
              alt="user1"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover absolute top-0 left-1/2 transform -translate-x-1/2"
            />
            <img
              src="/user2.jpg"
              alt="user2"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover absolute top-1/2 right-0 transform -translate-y-1/2"
            />
            <img
              src="/user3.jpg"
              alt="user3"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <img
              src="/user4.jpg"
              alt="user4"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover absolute top-1/2 left-0 transform -translate-y-1/2"
            />
            <img
              src="/user5.jpg"
              alt="user5"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover absolute top-8 left-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
