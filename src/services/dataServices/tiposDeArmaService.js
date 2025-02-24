import { API_URL } from './config';

const getTiposDeArma = async () => {
    const response = await fetch(`${API_URL}/tiposDeArma`);
    return response.json();
};

const getTipoDeArmaPorId = async (id) => {
    const response = await fetch(`${API_URL}/tiposDeArma/${id}`);
    return response.json();
}

const createTipoDeArma = async (tipoDeArma) => {
    const response = await fetch(`${API_URL}/tiposDeArma`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tipoDeArma),
    });
    return response.json();
}

const updateTipoDeArma = async (id, tipoDeArma) => {
    const response = await fetch(`${API_URL}/tiposDeArma/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tipoDeArma),
    });
    return response.json();
}

const deleteTipoDeArma = async (id) => {
    const response = await fetch(`${API_URL}/tiposDeArma/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}



export { getTiposDeArma, getTipoDeArmaPorId, createTipoDeArma, updateTipoDeArma, deleteTipoDeArma };
