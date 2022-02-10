import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/ListContainer';
import Counter from './components/ItemCount';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Hero title="Este es un titulo de ejemplo"/>
      <Counter initial={1}/>
      </div>
      
    
    
  );
}

export default App;
