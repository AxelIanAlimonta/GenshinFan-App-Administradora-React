import { useEffect, useState } from 'react';
import { getArmaRecomendadaPorIdPersonaje, deleteArmaRecomendadaPorIdPersonajeYIdArma, addArmaRecomendada } from '../services/dataServices/armasRecomendadasService';
import useFetchArmas from './useFetchArmas';

const useFetchArmasRecomendadasDePersonaje = (personajeId) => {
    const [armasFiltradas, setArmasFiltradas] = useState([]);
    const { armas } = useFetchArmas();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchArmasRecomendadas = async () => {
            setLoading(true);
            try {
                const armasRecomendadas = await getArmaRecomendadaPorIdPersonaje(personajeId);
                const armasFiltradas = armas.filter(arma =>
                    armasRecomendadas.some(recomendada => recomendada.armaId === arma.id)
                );
                setArmasFiltradas(armasFiltradas);
            } catch (error) {
                console.error('Error fetching recommended weapons:', error);
            } finally {
                setLoading(false);
            }
        };

        if (personajeId) {
            fetchArmasRecomendadas();
        }
    }, [personajeId, armas]);

    const eliminarRecomendacionDeArma = async (armaId) => {
        try {
            await deleteArmaRecomendadaPorIdPersonajeYIdArma(personajeId, armaId);
            setArmasFiltradas(prevArmas => prevArmas.filter(arma => arma.id !== armaId));
        } catch (error) {
            console.error('Error deleting recommended weapon:', error);
        }
    };

    const agregarRecomendacionDeArma = async (armaId) => {
        try {
            await addArmaRecomendada(personajeId, armaId);
            const arma = armas.find(arma => arma.id === armaId);
            if (arma) {
                setArmasFiltradas(prevArmas => [...prevArmas, arma]);
            }
        } catch (error) {
            console.error('Error adding recommended weapon:', error);
        }
    };

    return { armasFiltradas, loading, eliminarRecomendacionDeArma, agregarRecomendacionDeArma, armas };
};

export default useFetchArmasRecomendadasDePersonaje;