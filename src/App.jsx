import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Elementos from './pages/Elementos/Elementos';
import Regiones from './pages/Regiones/Regiones';
import TiposDeArma from './pages/TiposDeArma/TiposDeArma';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/regiones" element={<Regiones />} />
        <Route path="/tiposdearma" element={<TiposDeArma />} />
      </Routes>
    </Router>
  );
}

export default App;