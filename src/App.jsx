import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import About from "./components/About"; 
import Footer from "./components/Footer"; 
import 'animate.css'

const App = () => {
  return (
    <Router> 
      <div className="relative w-full h-screen">
        
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>

        
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;

