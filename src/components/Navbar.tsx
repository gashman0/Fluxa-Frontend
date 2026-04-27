import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-black border-b border-[#642409] px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo-icon.svg" alt="Fluxa" className="w-8 h-8" />
        <span className="text-white font-semibold text-lg">Fluxa</span>
      </div>

      {/* Center: Nav Links */}
      {/* <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition">
          Jobs
        </a>
        <a href="#" className="hover:text-white transition">
          Bookmarks
        </a>
        <a href="#" className="hover:text-white transition">
          Applications
        </a>
      </div> */}

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button 
          className="text-gray-300 hover:text-white transition hidden md:block"
          onClick={() => navigate('/login')}
        >
          Login
        </button>

        <button 
          className="bg-[#6B0B0C] hover:bg-[#4A0708] text-white px-4 py-2 rounded-md text-sm"
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
