import React from "react";

const Navbar: React.FC = () => {
  return (
  <nav className="bg-slate-700 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Menu */}
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-gray-200">About Me</a>
            <a href="#about" className="hover:text-gray-200">Resume</a>
            <a href="#services" className="hover:text-gray-200">Projects</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
          
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
