import { useState } from 'react';
import { useFetchPersonajes } from '../../hooks/useFetchPersonajes';
import Header from '../../components/Header/Header';
import { Button, ListGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Personajes.css'; // Import the CSS file
import Loading from '../../components/Loading/Loading'; // Correct import

function Personajes() {
    const { personajes, loading, eliminarPersonaje } = useFetchPersonajes();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleEditClick = (id) => {
        navigate(`/personajes/editar/${id}`);
    };

    const handleAddClick = () => {
        navigate('/personajes/agregar');
    };

    const handleDeleteClick = (id) => {
        eliminarPersonaje(id);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPersonajes = personajes.filter((personaje) =>
        personaje.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <main className='personajesMain'>

                <FormControl
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='w-50'
                />
                <Button variant="success" onClick={handleAddClick} >
                    Agregar Personaje
                </Button>

                {loading && <Loading />}
                {filteredPersonajes.map((personaje) => (
                    <ListGroup key={personaje.id} horizontal>
                        <ListGroup.Item className="nombrePersonaje">
                            {personaje.nombre}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary" onClick={() => handleEditClick(personaje.id)}>Editar</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="danger" onClick={() => handleDeleteClick(personaje.id)}>Eliminar</Button>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </main>
        </>
    );
}

export default Personajes;