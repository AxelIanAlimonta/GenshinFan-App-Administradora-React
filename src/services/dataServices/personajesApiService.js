import { API_URL } from './config';

const getPersonajes = async () => {
    const response = await fetch(`${API_URL}/personajes`);
    return response.json();
}

const getPersonaje = async (id) => {
    const response = await fetch(`${API_URL}/personajes/${id}`);
    return response.json();
}

const createPersonaje = async (personaje) => {
    const response = await fetch(`${API_URL}/personajes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personaje)
    });
    return response.json();
}

const updatePersonaje = async (id, personaje) => {
    const response = await fetch(`${API_URL}/personajes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personaje)
    });
    return response.json();
}

const deletePersonaje = async (id) => {
    const response = await fetch(`${API_URL}/personajes/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}

export {
    getPersonajes,
    getPersonaje,
    createPersonaje,
    updatePersonaje,
    deletePersonaje
}
