import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Elementos from './pages/Elementos/Elementos';
import Regiones from './pages/Regiones/Regiones';
import TiposDeArma from './pages/TiposDeArma/TiposDeArma';
import Personajes from './pages/Personajes/Personajes';
import AgregarPersonaje from './pages/Personajes/AgregarPersonaje/AgregarPersonaje'
import EditarPersonaje from './pages/Personajes/EditarPersonaje/EditarPersonaje';
import Armas from './pages/Armas/Armas';
import AgregarElemento from './pages/Elementos/AgregarElemento/AgregarElemento';
import AgregarRegion from './pages/Regiones/AgregarRegion/AgregarRegion';
import EditarElemento from './pages/Elementos/EditarElemento/EditarElemento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tiposdearma" element={<TiposDeArma />} />

        <Route path="/regiones" element={<Regiones />} />
        <Route path="/agregarregion" element={<AgregarRegion />} />

        <Route path="/armas" element={<Armas />} />

        <Route path="/elementos" element={<Elementos />} />
        <Route path="/elementos/agregarelemento" element={<AgregarElemento />} />
        <Route path="/elementos/editarelemento/:id" element={<EditarElemento />} />

        <Route path="/personajes" element={<Personajes />} />
        <Route path="/agregarpersonaje" element={<AgregarPersonaje />} />
        <Route path="/editarpersonaje/:id" element={<EditarPersonaje />} />

      </Routes >
    </Router >
  );
}

export default App;