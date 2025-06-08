import { useEffect, useState } from "react";
import { getArmasRecomendadas, addArmaRecomendada, deleteArmaRecomendadaPorIdPersonajeYIdArma } from "../services/dataServices/armasRecomendadasService";


export const useArmasRecomendadas = () => {
    const [armasRecomendadas, setArmasRecomendadas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const data = await getArmasRecomendadas();
            setArmasRecomendadas(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching armas recomendadas:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const agregarRecomendacionDeArma = async (idPersonaje, idArma) => {
        try {
            await addArmaRecomendada(idPersonaje, idArma);
            await fetchData(); // <-- recarga desde backend
        } catch (error) {
            console.error("Error adding arma recomendada:", error);
        }
    };

    const eliminarRecomendacionDeArma = async (idPersonaje, idArma) => {
        try {
            await deleteArmaRecomendadaPorIdPersonajeYIdArma(idPersonaje, idArma);
            await fetchData(); // <-- recarga desde backend
        } catch (error) {
            console.error("Error deleting arma recomendada:", error);
        }
    };

    return {
        armasRecomendadas,
        agregarRecomendacionDeArma,
        eliminarRecomendacionDeArma,
        loading,
    };
}