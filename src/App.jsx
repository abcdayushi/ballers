import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import About from "./components/About"; 
import Footer from "./components/Footer"; // Import the Footer componentnpm rundev
import 'animate.css'

const App = () => {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div className="relative w-full h-screen">
        {/* Navbar (Overlayed on top of Home) */}
        <Navbar />
        
        {/* Define routes inside Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
        </Routes>

        {/* Footer */}
        <Footer /> {/* Add Footer */}
      </div>
    </Router>
  );
};

export default App;

