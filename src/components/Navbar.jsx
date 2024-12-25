import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for checking current path
import assets from '../assets/assets'; // Import assets module (including baller.svg)

const Navbar = () => {
  const location = useLocation(); // Hook to get the current path
  const [active, setActive] = useState('');

  // Update active state when the location changes
  useEffect(() => {
    if (location.pathname === '/') {
      setActive('Home');
    } else if (location.pathname === '/about') {
      setActive('About');
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50">
      {/* Left Side: "BALLERS" Text with a more aesthetic and italic font */}
      <div className="absolute inset-x-0 text-center flex items-center md:text-5xl text-xs font-bold tracking-wide uppercase font-playfair italic text-black shadow-lg md:inset-x-auto md:left-8">
        {/* "BALLERS" Text */}
        <span className="text-white mr-3">Ballers</span>

        {/* Baller SVG Icon with Further Reduced Size for iPhone SE */}
        <img
          src={assets.baller} // Assuming baller.svg is available in assets.js
          alt="Baller Logo"
          className="baller-icon" // Use a custom class for mobile styling
        />
      </div>

      {/* Right Side: Navbar Links (Visible only on desktop) */}
      <ul className="hidden md:flex gap-12 items-center text-sm font-semibold tracking-widest uppercase justify-end w-full">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className={`cursor-pointer text-white hover:text-gray-400 transition-colors duration-200 ${
              active === 'Home' ? 'text-pink-500' : ''
            }`}
          >
            Home
          </Link>
        </li>
        {/* About Link */}
        <li>
          <Link
            to="/about"
            className={`cursor-pointer text-white hover:text-gray-400 transition-colors duration-200 ${
              active === 'About' ? 'text-pink-500' : ''
            }`}
          >
            About
          </Link>
        </li>

        {/* "Join Now" Button */}
        <li>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm uppercase hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-all">
            Join Now
          </button>
        </li>
      </ul>

      {/* Mobile View: Icons Below Ballers */}
      <div className="absolute top-0 right-0 flex md:hidden flex-row items-center justify-end gap-2 mt-2">
        {/* Home Icon */}
        <Link
          to="/"
          className={`text-white text-xs font-bold flex items-center ${
            active === 'Home' ? 'text-pink-500' : ''
          }`}
        >
          Home
        </Link>

        {/* About Icon */}
        <Link
          to="/about"
          className={`text-white text-xs font-bold flex items-center ${
            active === 'About' ? 'text-pink-500' : ''
          }`}
        >
          About
        </Link>

        {/* Join Now Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full font-semibold text-xs uppercase hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-all">
          Join Now
        </button>
      </div>

      {/* CSS for mobile screen adjustments */}
      <style jsx>{`
        @media (max-width: 375px) { /* Targeting iPhone SE */
          .text-xs {
            font-size: 0.625rem; /* Reduced font size for iPhone SE */
          }

          /* Make the Baller logo as small as possible */
          .baller-icon {
            width: 0.75rem; /* Reduce the size of the icon to the smallest */
            height: 0.75rem; /* Adjust height accordingly */
            margin-top: 0; /* Align icon with the text */
          }

          .gap-12 {
            gap: 0.5rem; /* Reduce gap between navbar links */
          }

          .gap-2 {
            gap: 0.25rem; /* Reduce gap further between mobile icons */
          }

          .text-lg {
            font-size: 0.75rem; /* Further reduce font size for navbar links */
          }

          .font-semibold {
            font-weight: 500; /* Slightly reduce font weight */
          }

          .px-6 {
            padding-left: 0.25rem; /* Further reduce horizontal padding for mobile */
            padding-right: 0.25rem; /* Further reduce horizontal padding for mobile */
          }

          .py-2 {
            padding-top: 0.25rem; /* Adjust vertical padding for mobile */
            padding-bottom: 0.25rem; /* Adjust vertical padding for mobile */
          }

          .bg-gradient-to-r {
            background-size: 200% 200%; /* Ensure smooth gradient for mobile */
          }

          /* Align "Home", "About" and "Join Now" to the top right for iPhone SE */
          .absolute.top-0.right-0 {
            top: 0;
            right: 0;
            margin-top: 0.5rem;
          }

          /* Align home and about to be in same line */
          .flex-row {
            flex-direction: row; /* Align Home and About horizontally */
            justify-content: flex-start; /* Ensure elements are aligned at the start */
            align-items: center; /* Align vertically centered */
          }

          /* Reduce size for Baller text for iPhone SE */
          .text-xs {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
