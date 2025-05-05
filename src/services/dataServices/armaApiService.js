import { API_URL } from './config';

export const getArmas = async () => {
    const response = await fetch(`${API_URL}/armas`);
    if (!response.ok) {
        throw new Error('Error fetching armas');
    }
    return response.json();
};

export const createArma = async (arma) => {
    const response = await fetch(`${API_URL}/armas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arma),
    });
    if (!response.ok) {
        throw new Error('Error creating arma');
    }
    return response.json();
};

export const updateArma = async (id, arma) => {
    const response = await fetch(`${API_URL}/armas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arma),
    });
    if (!response.ok) {
        throw new Error('Error updating arma');
    }
    return response.json();
};

export const deleteArma = async (id) => {
    const response = await fetch(`${API_URL}/armas/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error deleting arma');
    }
    return response.json();
};

export const getArmaById = async (id) => {
    const response = await fetch(`${API_URL}/armas/${id}`);
    if (!response.ok) {
        throw new Error('Error fetching arma by ID');
    }
    return response.json();
}