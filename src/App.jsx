import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Elementos from './pages/Elementos/Elementos';
import Regiones from './pages/Regiones/Regiones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/regiones" element={<Regiones />} />
      </Routes>
    </Router>
  );
}

export default App;