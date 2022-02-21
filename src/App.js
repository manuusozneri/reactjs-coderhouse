import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection/index.js';
import Counter from './components/ItemCount';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <HeroSection/>
          <div className="productSection"> 
            <h1 id="productos">Mira Nuestros Productos</h1> 
            <div className="item-container">
              <Counter stock="4" imagen="https://via.placeholder.com/150" alt="placeholder"/>
            </div>
          </div>
          
        </Router>
          
      </div>
      
         
      
          
        
      
      
      
      
    
    
  );
}

export default App;
