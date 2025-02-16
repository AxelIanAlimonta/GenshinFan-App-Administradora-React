import { useEffect, useState } from 'react';
import { getElementos, createElemento, updateElemento, deleteElemento } from '../services/elementoApiService';

const useFetchElementos = () => {
    const [elementos, setElementos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchElementos = async () => {
            try {
                const data = await getElementos();
                setElementos(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching elementos:', error);
            }
        };

        fetchElementos();
    }, []);

    const addElemento = async (elemento) => {
        try {
            const newElemento = await createElemento(elemento);
            setElementos([...elementos, newElemento]);
        } catch (error) {
            setError(error);
            console.error('Error adding elemento:', error);
        }
    };

    const editElemento = async (id, updatedElemento) => {
        try {
            const updated = await updateElemento(id, updatedElemento);
            setElementos(elementos.map((el) => (el.id === id ? updated : el)));
        } catch (error) {
            setError(error);
            console.error('Error updating elemento:', error);
        }
    };

    const removeElemento = async (id) => {
        try {
            await deleteElemento(id);
            setElementos(elementos.filter((el) => el.id !== id));
        } catch (error) {
            setError(error);
            console.error('Error deleting elemento:', error);
        }
    };

    return { elementos, error, addElemento, editElemento, removeElemento };
};

export default useFetchElementos;