import { API_URL } from "./config";

const URL_ARMAS_RECOMENDADAS = `${API_URL}/PersonajeArmaRecomendada`;

export const getArmasRecomendadas = async () => {
    const response = await fetch(URL_ARMAS_RECOMENDADAS);
    return await response.json();
}

export const getArmaRecomendadaPorIdPersonaje = async (personajeId) => {
    const response = await fetch(`${URL_ARMAS_RECOMENDADAS}/personaje/${personajeId}`);
    return await response.json();
}

export const getArmaRecomendadaPorIdArma = async (armaId) => {
    const response = await fetch(`${URL_ARMAS_RECOMENDADAS}/arma/${armaId}`);
    return await response.json();
}

export const addArmaRecomendada = async (personajeId, armaId) => {
    const response = await fetch(`${URL_ARMAS_RECOMENDADAS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personajeId: personajeId,
            armaId: armaId
        })
    });
    return await response.json();
}

export const deleteArmaRecomendadaPorIdPersonajeYIdArma = async (personajeId, armaId) => {
    const response = await fetch(`${URL_ARMAS_RECOMENDADAS}/personaje/${personajeId}/arma/${armaId}`, {
        method: 'DELETE'
    });
    return await response.json();
}