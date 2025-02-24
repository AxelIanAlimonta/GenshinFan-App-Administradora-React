import { useState, useEffect, useCallback } from 'react';
import { getRegiones, createRegion, updateRegion, deleteRegion } from '../services/dataServices/regionApiService';

const useFetchRegiones = () => {
    const [regiones, setRegiones] = useState([]);

    useEffect(() => {
        const fetchRegiones = async () => {
            try {
                const data = await getRegiones();
                setRegiones(data);
            } catch (error) {
                console.error('Error fetching regiones:', error);
            }
        };

        fetchRegiones();
    }, []);

    const addRegion = useCallback(async (region) => {
        try {
            const newRegion = await createRegion(region);
            setRegiones((prevRegiones) => [...prevRegiones, newRegion]);
        } catch (error) {
            console.error('Error adding region:', error);
        }
    }, []);

    const editRegion = useCallback(async (id, updatedRegion) => {
        try {
            const updated = await updateRegion(id, updatedRegion);
            setRegiones((prevRegiones) => prevRegiones.map((el) => (el.id === id ? updated : el)));
        } catch (error) {
            console.error('Error updating region:', error);
        }
    }, []);

    const removeRegion = useCallback(async (id) => {
        try {
            await deleteRegion(id);
            setRegiones((prevRegiones) => prevRegiones.filter((el) => el.id !== id));
        } catch (error) {
            console.error('Error deleting region:', error);
        }
    }, []);

    return { regiones, addRegion, editRegion, removeRegion };
}

export default useFetchRegiones;