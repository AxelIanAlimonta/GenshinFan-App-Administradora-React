import { useEffect, useState } from "react";
import { getArmas } from "../../services/dataServices/armaApiService"
import { filtrarArmasPorTipo, filtrarArmasQueNoSonRecomendadas, filtrarArmasQueYaSonRecomendadas } from './utilidades'
import { getPersonaje } from "../../services/dataServices/personajesApiService";
import { useArmasRecomendadas } from "../useArmasRecomendadas";


export default function useArmasRecomendadasDePersonaje(idPersonaje) {
    const [armasRecomendadasAgregadas, setArmasRecomendadasAgregadas] = useState([]);
    const [armasRecomendadasNoAgregadas, setArmasRecomendadasNoAgregadas] = useState([]);
    const [loading, setLoading] = useState(true);
    const { armasRecomendadas, agregarRecomendacionDeArma, eliminarRecomendacionDeArma } = useArmasRecomendadas();

    useEffect(() => {
        const fetchData = async (idPersonaje) => {
            try {
                const armas = await getArmas();
                const personaje = await getPersonaje(idPersonaje);
                const armasDelTipoCorrecto = filtrarArmasPorTipo(armas, personaje.id_TipoDeArma);

                setArmasRecomendadasAgregadas(filtrarArmasQueYaSonRecomendadas(armasDelTipoCorrecto, armasRecomendadas));


                setArmasRecomendadasNoAgregadas(filtrarArmasQueNoSonRecomendadas(armasDelTipoCorrecto, armasRecomendadas));

                setLoading(false);
            } catch (error) {
                console.error("Error al obtener las armas recomendadas:", error);
            }
        };

        fetchData(idPersonaje);
    }, [armasRecomendadas]);

   


    return {
        armasRecomendadasAgregadas,
        armasRecomendadasNoAgregadas,
        loading,
        agregarRecomendacionDeArma,
        eliminarRecomendacionDeArma
    };

}