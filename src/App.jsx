import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Elementos from './pages/Elementos/Elementos';
import Regiones from './pages/Regiones/Regiones';
import TiposDeArma from './pages/TiposDeArma/TiposDeArma';
import Personajes from './pages/Personajes/Personajes';
import AgregarPersonaje from './pages/AgregarPersonaje/AgregarPersonaje';
import EditarPersonaje from './pages/EditarPersonaje/EditarPersonaje';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/regiones" element={<Regiones />} />
        <Route path="/tiposdearma" element={<TiposDeArma />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/agregarpersonaje" element={<AgregarPersonaje />} />
        <Route path="/editarpersonaje/:id" element={<EditarPersonaje />} />
      </Routes>
    </Router>
  );
}

export default App;