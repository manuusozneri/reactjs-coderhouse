import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/ListContainer';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Hero title="Este es un titulo de ejemplo"/>
      <Hero subtitle="Este es un subtitulo de ejemplo"/>
      </div>
      
    
    
  );
}

export default App;
