import { useState, useEffect } from 'react';

import { getPersonaje } from '../services/dataServices/personajesApiService';


const useFetchPersonaje = (id) => {
    const [personaje, setPersonaje] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPersonaje(id)
            .then((personaje) => {
                setPersonaje(personaje);
                setLoading(false);
            });
    }, [id]);

    return { personaje, loading };
};

export default useFetchPersonaje;