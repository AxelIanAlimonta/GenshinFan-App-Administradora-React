import { API_URL } from './config';


//get all regiones
export const getRegiones = async () => {
    const response = await fetch(`${API_URL}/regiones`);
    if (!response.ok) {
        throw new Error('Error fetching regiones');
    }
    return response.json();
};

//create a region
export const createRegion = async (region) => {
    const response = await fetch(`${API_URL}/regiones`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(region),
    });
    if (!response.ok) {
        throw new Error('Error creating region');
    }
    return response.json();
};

//update a region
export const updateRegion = async (id, region) => {
    const response = await fetch(`${API_URL}/regiones/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(region),
    });
    if (!response.ok) {
        throw new Error('Error updating region');
    }
    return response.json();
};

//delete a region
export const deleteRegion = async (id) => {
    const response = await fetch(`${API_URL}/regiones/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error deleting region');
    }
    return response.json();
};

//get a region by id
export const getRegionById = async (id) => {
    const response = await fetch(`${API_URL}/regiones/${id}`);
    if (!response.ok) {
        throw new Error('Error fetching elemento by ID');
    }
    return response.json();
};