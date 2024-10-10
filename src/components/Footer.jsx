import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.webp"
            alt="Nissr Dijlah Logo"
            className="w-10 h-10 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-white">Nissr Dijlah</h3>
            <p className="text-sm text-gray-400">
              &copy; 2024 Nissr Dijlah. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <img
              src="/face.png"
              alt="Facebook"
              className="w-5 h-5 object-cover"
            />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <img
              src="/insta.png"
              alt="Instagram"
              className="w-5 h-5 object-cover"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
