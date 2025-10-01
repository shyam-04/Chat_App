import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
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
export default LoginPage;
