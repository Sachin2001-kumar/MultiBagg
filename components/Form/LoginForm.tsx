import { Mail, Lock } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen w-full ">
      
      {/* LEFT SIDE (FORM) */}
      <div className="w-1/2 flex items-center justify-center bg-linear-to-r from-indigo-300 to-purple-100">
        <div className="w-full max-w-md space-y-6 p-8 border-2 border-black rounded-xl">
          
          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-500">
              Login to your account
            </p>
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
            Login
          </Button>

        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="w-1/2 bg-white flex items-center justify-center ">
        <Image
          src="/auth-illustration.png"
          alt="login"
          width={500}
          height={500}
          className="w-full h-full border-l-4 border-green-800"
          loading="eager"
          objectFit="cover"
        />
      </div>

    </div>
  );
};

export default LoginForm;