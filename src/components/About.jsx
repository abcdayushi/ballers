import React from 'react';
import assets from '../assets/assets'; 
import 'animate.css'; 

const About = () => {
  return (
    <div className="relative w-full h-screen">
      
      <img
        src={assets.background1} 
        alt="Background"
        className="w-full h-screen object-cover"
      />

      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      
      <div className="absolute sm:top-20 top-48 left-1/2 transform -translate-x-1/2 text-sm sm:text-2xl md:text-4xl lg:text-6xl font-italic text-white animate__animated animate__fadeIn text-center px-4 iphone-slogan">
        <p className="text-sm sm:text-xl md:text-2xl lg:text-4xl italic whitespace-nowrap">
          &quot;Invest in Sports, Support Champions&quot;
        </p>
      </div>

      
      <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 w-full sm:w-11/12">
        
        
        <div className="bg-black border-2 border-[#d4af37] w-full sm:w-96 h-auto p-4 sm:p-6 rounded-lg shadow-xl text-white animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Mission</h3>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Our mission is to provide an elite platform for members to invest in sports assets, attend invite-only events, and network with influential leaders, all while enhancing their portfolio and lifestyle with exceptional returns.
          </p>
        </div>

        
        <div className="bg-black border-2 border-[#d4af37] w-full sm:w-96 h-auto p-4 sm:p-6 rounded-lg shadow-xl text-white animate__animated animate__fadeIn animate__delay-1.5s">
          <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Vision</h3>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            At Ballers, our vision is to create a world where high-net-worth individuals experience unparalleled access to sports as an asset class, offering exclusive investment opportunities and a luxurious lifestyle that compounds both wealth and experiences.
          </p>
        </div>

        
        <div className="bg-black border-2 border-[#d4af37] w-full sm:w-96 h-auto p-4 sm:p-6 rounded-lg shadow-xl text-white animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Team</h3>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            With over 15 years of combined experience and 130,000+ hours dedicated to perfecting our strategies, our expert team is committed to delivering exceptional results, saving you time, and maximizing both your investments and lifestyle.
          </p>
        </div>
      </div>

      
      <style jsx>{`
        @media (max-width: 375px) {  
          .absolute {
            top: 40px;  
          }
          .iphone-slogan {
            top: 80px;  
          }
          .w-full {
            width: 80%; 
          }
          .p-4 {
            padding: 1rem; 
          }
          .text-xs {
            font-size: 0.65rem;  
          }
          .text-sm {
            font-size: 0.75rem;  
          }
          .w-full.sm\:w-96 {
            width: 90% !important;  
          }
          .gap-8 {
            gap: 2px !important; 
          }
        }
      `}</style>
    </div>
  );
};

export default About;
