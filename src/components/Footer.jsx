import React from 'react';
import { FaInstagram, FaLinkedin, FaQuestionCircle } from 'react-icons/fa';
import assets from '../assets/assets'; // Import assets module (including baller.svg)

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-black text-white py-2 md:py-6">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Left Side: "BALLERS" Text with Icon */}
        <div className="flex items-center text-3xl font-bold italic uppercase font-playfair text-white md:text-left text-center mb-2 md:mb-0">
          {/* "BALLERS" Text */}
          <span className="text-white mr-3">BALLERS</span>

          {/* Baller SVG Icon with the Same Size as the Text */}
          <img
            src={assets.baller} // Assuming baller.svg is available in assets.js
            alt="Baller Logo"
            className="w-7 h-7" // Same size for the icon as the text
          />
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex gap-4 justify-center">
          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>

          {/* FAQ Icon */}
          <a
            href="/faq"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaQuestionCircle size={24} />
          </a>
        </div>
      </div>

      {/* Footer Line and "All Rights Reserved" Text */}
      <div className="text-xs text-center md:text-right px-6 md:px-12 mt-2">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>

      {/* CSS for mobile screen adjustments */}
      <style jsx>{`
        @media (max-width: 375px) { /* Targeting mobile screens */
          .py-2 {
            padding-top: 1rem; /* Further reduce top padding */
            padding-bottom: 1rem; /* Further reduce bottom padding */
          }

          .text-3xl {
            font-size: 1.5rem; /* Smaller font size for "BALLERS" text */
          }

          .gap-4 {
            gap: 1rem; /* Reduce gap between icons */
          }

          .text-xs {
            font-size: 0.7rem; /* Smaller font size for "All Rights Reserved" text */
          }

          .flex {
            flex-direction: column; /* Stack elements vertically */
            align-items: center; /* Center align the content */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;

