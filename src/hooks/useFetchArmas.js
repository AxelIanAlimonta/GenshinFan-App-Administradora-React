import { useEffect, useState } from 'react';
import { getArmas, createArma, updateArma, deleteArma } from '../services/dataServices/armaApiService';

const useFetchArmas = () => {
    const [armas, setArmas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchArmas = async () => {
            setLoading(true);
            try {
                const data = await getArmas();
                setArmas(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching armas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArmas();
    }, []);

    const addArma = async (arma) => {
        setLoading(true);
        try {
            const newArma = await createArma(arma);
            setArmas([...armas, newArma]);
        } catch (error) {
            setError(error);
            console.error('Error adding arma:', error);
        } finally {
            setLoading(false);
        }
    };

    const editArma = async (id, updatedArma) => {
        setLoading(true);
        try {
            const updated = await updateArma(id, updatedArma);
            setArmas(armas.map((ar) => (ar.id === id ? updated : ar)));
        } catch (error) {
            setError(error);
            console.error('Error updating arma:', error);
        } finally {
            setLoading(false);
        }
    };

    const removeArma = async (id) => {
        setLoading(true);
        try {
            await deleteArma(id);
            setArmas(armas.filter((ar) => ar.id !== id));
        } catch (error) {
            setError(error);
            console.error('Error deleting arma:', error);
        } finally {
            setLoading(false);
        }
    };

    return { armas, error, loading, addArma, editArma, removeArma };
};

export default useFetchArmas;