import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      
      {/* Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 space-y-6">
        
        {/* Name Row */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* First Name */}
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-gray-600" />
              <label className="text-sm font-semibold text-gray-700">
                First Name
              </label>
            </div>
            <Input
              placeholder="Enter your first name"
              className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-gray-600" />
              <label className="text-sm font-semibold text-gray-700">
                Last Name
              </label>
            </div>
            <Input
              placeholder="Enter your last name"
              className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>
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

        {/* Phone */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-gray-600" />
            <label className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
          </div>
          <Input
            type="tel"
            placeholder="+91 9134343434"
            className="h-12 px-4 rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-gray-600" />
            <label className="text-sm font-semibold text-gray-700">
              Message
            </label>
          </div>
          <textarea
            rows={5}
            placeholder="Tell us how we can help you..."
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
          />
        </div>

        {/* Button */}
        <Button className="w-full h-12 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
          Send Message
          <Send className="w-4 h-4" />
        </Button>

      </div>
    </div>
  );
};