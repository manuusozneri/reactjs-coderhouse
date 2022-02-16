import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/HeroSection';
import Counter from './components/ItemCount';


function App() {
  return (
      <div className="App">
      <Navbar/>
      <Hero title="Este es un titulo de ejemplo"/>
      <Counter stock="4" imagen="https://via.placeholder.com/150" alt="placeholder"/>
      </div>
      
    
    
  );
}

export default App;
