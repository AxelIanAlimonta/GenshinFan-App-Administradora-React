import { useState, useEffect, useCallback } from 'react';
import { getRegiones, createRegion, updateRegion, deleteRegion } from '../services/dataServices/regionApiService';

const useFetchRegiones = () => {
    const [regiones, setRegiones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegiones = async () => {
            setLoading(true);
            try {
                const data = await getRegiones();
                setRegiones(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching regiones:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRegiones();
    }, []);

    const addRegion = useCallback(async (region) => {
        setLoading(true);
        try {
            const newRegion = await createRegion(region);
            setRegiones((prevRegiones) => [...prevRegiones, newRegion]);
        } catch (error) {
            setError(error);
            console.error('Error adding region:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const editRegion = useCallback(async (id, updatedRegion) => {
        setLoading(true);
        try {
            const updated = await updateRegion(id, updatedRegion);
            setRegiones((prevRegiones) => prevRegiones.map((el) => (el.id === id ? updated : el)));
        } catch (error) {
            setError(error);
            console.error('Error updating region:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const removeRegion = useCallback(async (id) => {
        setLoading(true);
        try {
            await deleteRegion(id);
            setRegiones((prevRegiones) => prevRegiones.filter((el) => el.id !== id));
        } catch (error) {
            setError(error);
            console.error('Error deleting region:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { regiones, loading, error, addRegion, editRegion, removeRegion };
}

export default useFetchRegiones;