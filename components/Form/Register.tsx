import { Mail, Lock, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 w-full">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5 border-2 border-black">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-500">Sign up to get started</p>
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-gray-600" />
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
          </div>
          <Input
            type="text"
            placeholder="Enter your name"
            className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-gray-600" />
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
          </div>
          <Input
            type="email"
            placeholder="your.email@example.com"
            className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-gray-600" />
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
          </div>
          <Input
            type="password"
            placeholder="Enter your password"
            className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Button */}
        <Button className="w-full h-12 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all">
          Sign Up
        </Button>

      </div>
    </div>
  );
};

export default Register;