import { useEffect, useState } from 'react';
import { getElementos, createElemento, updateElemento, deleteElemento } from '../services/dataServices/elementoApiService';

const useFetchElementos = () => {
    const [elementos, setElementos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchElementos = async () => {
            setLoading(true);
            try {
                const data = await getElementos();
                setElementos(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching elementos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchElementos();
    }, []);

    const addElemento = async (elemento) => {
        setLoading(true);
        try {
            const newElemento = await createElemento(elemento);
            setElementos([...elementos, newElemento]);
        } catch (error) {
            setError(error);
            console.error('Error adding elemento:', error);
        } finally {
            setLoading(false);
        }
    };

    const editElemento = async (id, updatedElemento) => {
        setLoading(true);
        try {
            const updated = await updateElemento(id, updatedElemento);
            setElementos(elementos.map((el) => (el.id === id ? updated : el)));
        } catch (error) {
            setError(error);
            console.error('Error updating elemento:', error);
        } finally {
            setLoading(false);
        }
    };

    const removeElemento = async (id) => {
        setLoading(true);
        try {
            await deleteElemento(id);
            setElementos(elementos.filter((el) => el.id !== id));
        } catch (error) {
            setError(error);
            console.error('Error deleting elemento:', error);
        } finally {
            setLoading(false);
        }
    };

    return { elementos, error, loading, addElemento, editElemento, removeElemento };
};

export default useFetchElementos;