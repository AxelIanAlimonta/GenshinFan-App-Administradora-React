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
import AgregarElemento from './pages/Elementos/AgregarElemento/AgregarElemento';
import EditarElemento from './pages/Elementos/EditarElemento/EditarElemento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/regiones" element={<Regiones />} />
        <Route path="/regiones/agregarregion" element={<AgregarRegion />} />
        <Route path="/regiones/editarregion/:id" element={<EditarRegion />} />

        <Route path="/armas" element={<Armas />} />
        <Route path="/armas/agregararma" element={<AgregarArma />} />
        <Route path="/armas/editararma/:id" element={<EditarArma />} />

        <Route path="/armas/tiposdearma" element={<TiposDeArma />} />
        <Route path="/armas/tiposdearma/agregartipodearma" element={<AgregarTipoDeArma />} />
        <Route path="/armas/tiposdearma/editartipodearma/:id" element={<EditarTipoDeArma />} />


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