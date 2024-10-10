import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
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
            <h3 className="text-xl font-bold text-white mr-2">
              طريق بيروت للتجارة - محدودة المسؤولية
            </h3>
            <p className="text-sm text-gray-400 mr-2">
              &copy; كل الحقوق محفوظة لطريق بيروت للتجارة 2024.
            </p>
          </div>
        </div>

        

        <div className="flex  flex-col items-end">
          <div className="flex items-center gap-3 mt-3 ">
            <a href="tel:123456789 964+">12345678fffffff9 964+ </a>
            <FaPhone />
          </div>

          <div className="flex items-center gap-3 mt-3">
            <a href="mailto:nfoddddd@beirut.iq">
              <p>nfoddddd@beirut.iq</p>
            </a>
            <MdEmail />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
