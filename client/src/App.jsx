import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './components/navbar1'; 
import Backimage from './components/backimage';
import Tours from './components/tours';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar1 /> 
      
      
      <Routes>
        <Route path="/" element={<Backimage />} />
        <Route path="/tours" element={<Tours />} />
        
      </Routes>
  
    </Router>
  );
}

export default App;
