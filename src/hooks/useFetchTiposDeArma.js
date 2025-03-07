import { useState, useEffect } from 'react';
import { getTiposDeArma, createTipoDeArma, updateTipoDeArma, deleteTipoDeArma } from '../services/dataServices/tiposDeArmaService';

const useFetchTiposDeArma = () => {
    const [tiposDeArma, setTiposDeArma] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTiposDeArma = async () => {
            setLoading(true);
            try {
                const data = await getTiposDeArma();
                setTiposDeArma(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching tipos de arma:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTiposDeArma();
    }, []);

    const addTipoDeArma = async (tipoDeArma) => {
        setLoading(true);
        try {
            const newTipoDeArma = await createTipoDeArma(tipoDeArma);
            setTiposDeArma([...tiposDeArma, newTipoDeArma]);
        } catch (error) {
            setError(error);
            console.error('Error adding tipo de arma:', error);
        } finally {
            setLoading(false);
        }
    };

    const editTipoDeArma = async (id, updatedTipoDeArma) => {
        setLoading(true);
        try {
            const updated = await updateTipoDeArma(id, updatedTipoDeArma);
            setTiposDeArma(tiposDeArma.map((el) => (el.id === id ? updated : el)));
        } catch (error) {
            setError(error);
            console.error('Error updating tipo de arma:', error);
        } finally {
            setLoading(false);
        }
    };

    const removeTipoDeArma = async (id) => {
        setLoading(true);
        try {
            await deleteTipoDeArma(id);
            setTiposDeArma(tiposDeArma.filter((el) => el.id !== id));
        } catch (error) {
            setError(error);
            console.error('Error deleting tipo de arma:', error);
        } finally {
            setLoading(false);
        }
    };

    return { tiposDeArma, loading, error, addTipoDeArma, editTipoDeArma, removeTipoDeArma };
};

export default useFetchTiposDeArma;