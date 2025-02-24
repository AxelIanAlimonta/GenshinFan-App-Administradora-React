import { useState, useEffect } from 'react';
import { getTiposDeArma, createTipoDeArma, updateTipoDeArma, deleteTipoDeArma } from '../services/dataServices/tiposDeArmaService';

const useFetchTiposDeArma = () => {
    const [tiposDeArma, setTiposDeArma] = useState([]);

    useEffect(() => {
        getTiposDeArma().then((data) => setTiposDeArma(data));
    }, []);

    const addTipoDeArma = async (tipoDeArma) => {
        const newTipoDeArma = await createTipoDeArma(tipoDeArma);
        setTiposDeArma([...tiposDeArma, newTipoDeArma]);
    };

    const editTipoDeArma = async (id, updatedTipoDeArma) => {
        const updated = await updateTipoDeArma(id, updatedTipoDeArma);
        setTiposDeArma(tiposDeArma.map((el) => (el.id === id ? updated : el)));
    }

    const removeTipoDeArma = async (id) => {
        await deleteTipoDeArma(id);
        setTiposDeArma(tiposDeArma.filter((el) => el.id !== id));
    }

    return { tiposDeArma, addTipoDeArma, editTipoDeArma, removeTipoDeArma };

}

export default useFetchTiposDeArma;