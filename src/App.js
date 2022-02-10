import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/ListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Hero title="Este es un titulo de ejemplo"/>
      <ItemCount initial={1}/>
      </div>
      
    
    
  );
}

export default App;
