import Image from "next/image";
import Link from "next/link";
import ToolkitDrop from "./ToolKitDrop";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-900 border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-2">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="logo"
              width={40}
              height={40}
              priority
              className="rounded-xl object-contain"
            />
          </Link>

          <span className="text-white text-lg font-semibold tracking-wide">
            <Link href="/">MultiBagg</Link>
          </span>
        </div>

        {/* Mid Section */}
        <div className="hidden md:flex items-center gap-6 text-md text-gray-300 font-semibold">
          <Link href="/portfolio" className="hover:text-purple-400 transition">
            Portfolio
          </Link>

          <Link href="/discovery" className="hover:text-purple-400 transition">
            Discovery
          </Link>

          <Link href="/pricing" className="hover:text-purple-400 transition">
            Pricing
          </Link>

          {/* Toolkit with Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-300 hover:text-purple-400">
              Toolkit
            </span>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-4"></div>

            <ToolkitDrop />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-300 hover:text-white transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
