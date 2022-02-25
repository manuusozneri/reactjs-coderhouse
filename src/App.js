import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './routes/Home'
import Productos from './routes/product';



function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Productos />}/>
        </Routes>
          
      </div>
      
         
      
          
        
      
      
      
      
    
    
  );
}

export default App;
