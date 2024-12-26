import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import assets from '../assets/assets'; 

const Navbar = () => {
  const location = useLocation(); 
  const [active, setActive] = useState('');

  
  useEffect(() => {
    if (location.pathname === '/') {
      setActive('Home');
    } else if (location.pathname === '/about') {
      setActive('About');
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50">

      <div className="absolute inset-x-0 text-center flex items-center md:text-5xl text-xs font-bold tracking-wide uppercase font-playfair italic text-black shadow-lg md:inset-x-auto md:left-8">
        
        <span className="text-white mr-3">Ballers</span>

        
        <img
          src={assets.baller} 
          alt="Baller Logo"
          className="baller-icon" 
        />
      </div>

     
      <ul className="hidden md:flex gap-12 items-center text-sm font-semibold tracking-widest uppercase justify-end w-full">
       
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

        
        <li>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm uppercase hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-all">
            Join Now
          </button>
        </li>
      </ul>

      
      <div className="absolute top-0 right-0 flex md:hidden flex-row items-center justify-end gap-2 mt-2">
        
        <Link
          to="/"
          className={`text-white text-xs font-bold flex items-center ${
            active === 'Home' ? 'text-pink-500' : ''
          }`}
        >
          Home
        </Link>

        
        <Link
          to="/about"
          className={`text-white text-xs font-bold flex items-center ${
            active === 'About' ? 'text-pink-500' : ''
          }`}
        >
          About
        </Link>

        
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full font-semibold text-xs uppercase hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-all">
          Join Now
        </button>
      </div>

      
      <style jsx>{`
        @media (max-width: 375px) { 
          .text-xs {
            font-size: 0.625rem; 
          }

         
          .baller-icon {
            width: 0.75rem; 
            height: 0.75rem; 
            margin-top: 0; 
          }

          .gap-12 {
            gap: 0.5rem; 
          }

          .gap-2 {
            gap: 0.25rem; 
          }

          .text-lg {
            font-size: 0.75rem; 
          }

          .font-semibold {
            font-weight: 500; 
          }

          .px-6 {
            padding-left: 0.25rem;
            padding-right: 0.25rem; 
          }

          .py-2 {
            padding-top: 0.25rem; 
            padding-bottom: 0.25rem; 
          }

          .bg-gradient-to-r {
            background-size: 200% 200%; 
          }

          
          .absolute.top-0.right-0 {
            top: 0;
            right: 0;
            margin-top: 0.5rem;
          }

          
          .flex-row {
            flex-direction: row; 
            justify-content: flex-start; 
            align-items: center; 
          }

          
          .text-xs {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
