import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Elementos from './pages/Elementos/Elementos';
import Regiones from './pages/Regiones/Regiones';
import AgregarRegion from './pages/Regiones/AgregarRegion/AgregarRegion';
import EditarRegion from './pages/Regiones/EditarRegion/EditarRegion';
import Armas from './pages/Armas/Armas';
import AgregarArma from './pages/Armas/AgregarArma/AgregarArma';
import EditarArma from './pages/Armas/EditarArma/EditarArma';
import TiposDeArma from './pages/Armas/TiposDeArma/TiposDeArma';
import AgregarTipoDeArma from './pages/Armas/TiposDeArma/AgregarTipoDeArma/AgregarTipoDeArma';
import EditarTipoDeArma from './pages/Armas/TiposDeArma/EditarTipoDeArma/EditarTipoDeArma';
import Personajes from './pages/Personajes/Personajes';
import AgregarPersonaje from './pages/Personajes/AgregarPersonaje/AgregarPersonaje'
import EditarPersonaje from './pages/Personajes/EditarPersonaje/EditarPersonaje';
import AdministrarArmasRecomendadas from './pages/Personajes/AdministrarArmasRecomendadas/AdministrarArmasRecomendadas';
import AgregarElemento from './pages/Elementos/AgregarElemento/AgregarElemento';
import EditarElemento from './pages/Elementos/EditarElemento/EditarElemento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/regiones" element={<Regiones />} />
        <Route path="/regiones/agregar" element={<AgregarRegion />} />
        <Route path="/regiones/editar/:id" element={<EditarRegion />} />

        <Route path="/armas" element={<Armas />} />
        <Route path="/armas/agregar" element={<AgregarArma />} />
        <Route path="/armas/editar/:id" element={<EditarArma />} />

        <Route path="/armas/tiposdearma" element={<TiposDeArma />} />
        <Route path="/armas/tiposdearma/agregar" element={<AgregarTipoDeArma />} />
        <Route path="/armas/tiposdearma/editar/:id" element={<EditarTipoDeArma />} />


        <Route path="/elementos" element={<Elementos />} />
        <Route path="/elementos/agregar" element={<AgregarElemento />} />
        <Route path="/elementos/editar/:id" element={<EditarElemento />} />

        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/agregar" element={<AgregarPersonaje />} />
        <Route path="/personajes/editar/:id" element={<EditarPersonaje />} />
        <Route path="/personajes/:id/administrarArmasRecomendadas" element={<AdministrarArmasRecomendadas />} />

      </Routes >
    </Router >
  );
}

export default App;