import { useState, useEffect } from 'react';
import { getPersonajes, getPersonaje, createPersonaje, updatePersonaje, deletePersonaje } from '../services/dataServices/personajesApiService';

function useFetchPersonajes() {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPersonajes();
    }, []);

    const fetchPersonajes = async () => {
        const personajes = await getPersonajes();
        setPersonajes(personajes);
        setLoading(false);
    };

    const obtenerPersonaje = async (id) => {
        return await getPersonaje(id);
    };

    const agregarPersonaje = async (personaje) => {
        const nuevoPersonaje = await createPersonaje(personaje);
        setPersonajes([...personajes, nuevoPersonaje]);
    };

    const editarPersonaje = async (id, personaje) => {
        const personajeActualizado = await updatePersonaje(id, personaje);
        setPersonajes(personajes.map(p => p.id === id ? personajeActualizado : p));
    };

    const eliminarPersonaje = async (id) => {
        await deletePersonaje(id);
        setPersonajes(personajes.filter(p => p.id !== id));
    };

    return { personajes, loading, obtenerPersonaje, agregarPersonaje, editarPersonaje, eliminarPersonaje };
}

export { useFetchPersonajes };