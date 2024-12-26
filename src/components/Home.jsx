import React from 'react';
import assets from '../assets/assets'; 
import Footer from './Footer'; 

const Home = () => {
  return (
    <div className="relative w-full z-10">
      
      <img
        src={assets.background1} 
        alt="Background"
        className="w-full h-screen object-cover"
      />

      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      
      <div className="absolute top-1/3 right-10 md:right-12 md:left-auto text-white animate-slideIn uppercase font-cabin text-center md:text-left">
        <div className="text-4xl md:text-7xl italic font-light">Game On</div>
        <div className="text-5xl md:text-8xl italic font-bold mt-4">
          Profits <span className="block md:inline">Up!</span>
        </div>
      </div>

      
      <div className="absolute top-40 md:top-28 md:left-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        
        <div className="relative text-center">
          <img
            src={assets.inv} 
            alt="inv"
            className="w-20 h-20 md:w-40 md:h-40 bg-black bg-opacity-40 rounded-full"
          />
          <span className="text-white text-sm mt-2 font-bold italic block hover:text-lightblue-500 transition-all duration-200">
            Investment <span className="text-xl inline-block ml-2 font-bold">→</span>
          </span>
        </div>

        
        <div className="relative text-center">
          <img
            src={assets.phil} 
            alt="SVG2"
            className="w-20 h-20 md:w-40 md:h-40 bg-black bg-opacity-40 rounded-full"
          />
          <span className="text-white text-sm mt-2 font-bold italic block hover:text-lightblue-500 transition-all duration-200">
            Philanthropy <span className="text-xl inline-block ml-2 font-bold">→</span>
          </span>
        </div>

        
        <div className="relative text-center">
          <img
            src={assets.comm} 
            alt="SVG3"
            className="w-20 h-20 md:w-40 md:h-40 bg-black bg-opacity-40 rounded-full"
          />
          <span className="text-white text-sm mt-2 font-bold italic block hover:text-lightblue-500 transition-all duration-200">
            Community <span className="text-xl inline-block ml-2 font-bold">→</span>
          </span>
        </div>
      </div>

      
      <Footer />

      
      <style jsx>{`
        @media (max-width: 375px)
          .absolute.top-40 {
            top: 12rem; 
          }

          .absolute.top-40 md:top-28 {
            top: 12rem; 
          }

          
          .w-20 {
            width: 32px;
            height: 32px;
          }

          .text-sm {
            font-size: 12px;
          }

          .text-5xl {
            font-size: 2rem; 
          }

          .absolute.top-40.md\:top-28 {
            top: 12rem; 
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
