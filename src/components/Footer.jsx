import React from 'react';
import { FaInstagram, FaLinkedin, FaQuestionCircle } from 'react-icons/fa';
import assets from '../assets/assets'; 

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-black text-white py-2 md:py-6">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        
        <div className="flex items-center text-3xl font-bold italic uppercase font-playfair text-white md:text-left text-center mb-2 md:mb-0">
          
          <span className="text-white mr-3">BALLERS</span>

          
          <img
            src={assets.baller} 
            alt="Baller Logo"
            className="w-7 h-7" 
          />
        </div>

        
        <div className="flex gap-4 justify-center">
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>

          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>

          
          <a
            href="/faq"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaQuestionCircle size={24} />
          </a>
        </div>
      </div>

      
      <div className="text-xs text-center md:text-right px-6 md:px-12 mt-2">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>

      
      <style jsx>{`
        @media (max-width: 375px) 
          .py-2 {
            padding-top: 1rem; 
            padding-bottom: 1rem; 
          }

          .text-3xl {
            font-size: 1.5rem;
          }

          .gap-4 {
            gap: 1rem; 
          }

          .text-xs {
            font-size: 0.7rem; 
          }

          .flex {
            flex-direction: column; 
            align-items: center; 
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;

