import config from '../../../config';

const { API_URL } = config;

export const getElementos = async () => {
    const response = await fetch(`${API_URL}/elementos`);
    if (!response.ok) {
        throw new Error('Error fetching elementos');
    }
    return response.json();
};

export const createElemento = async (elemento) => {
    const response = await fetch(`${API_URL}/elementos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(elemento),
    });
    if (!response.ok) {
        throw new Error('Error creating elemento');
    }
    return response.json();
};

export const updateElemento = async (id, elemento) => {
    const response = await fetch(`${API_URL}/elementos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(elemento),
    });
    if (!response.ok) {
        throw new Error('Error updating elemento');
    }
    return response.json();
};

export const deleteElemento = async (id) => {
    const response = await fetch(`${API_URL}/elementos/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error deleting elemento');
    }
    return response.json();
};