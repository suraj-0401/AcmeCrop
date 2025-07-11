import React, { useState } from "react";
import { Mail, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success and navigate to dashboard
    console.log("Login attempt:", { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />

      <div className="relative w-full max-w-md">
        {/* Main Login Card */}
        <div className="bg-white rounded-2xl border border-border-DEFAULT shadow-lg p-8 mb-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-normal text-healthtrack-primary mb-2">
              HealthTrack
            </h1>
            <p className="text-text-secondary text-lg">
              Sign in to access your patient dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-text-tertiary text-base mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-10 h-14 text-lg border-border-medium rounded-md bg-surface-light"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-text-tertiary text-base">Password</label>
                <button
                  type="button"
                  className="text-text-muted text-base hover:text-text-secondary transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 h-14 text-lg border-border-medium rounded-md bg-white"
                  required
                />
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-button-primary hover:bg-gray-800 text-white text-lg font-bold rounded-md transition-colors"
            >
              Sign in
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-text-muted">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>

        {/* Security Notice */}
        <div className="bg-surface-dark rounded-md p-4 flex items-center space-x-3">
          <Shield className="h-5 w-5 text-text-tertiary" />
          <p className="text-text-tertiary text-base">
            Your data is securely encrypted and HIPAA compliant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
