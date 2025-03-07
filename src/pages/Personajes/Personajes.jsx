import { useFetchPersonajes } from '../../hooks/useFetchPersonajes';
import Header from '../../components/Header/Header';
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Personajes.css'; // Import the CSS file
import Loading from '../../components/Loading/Loading'; // Correct import

function Personajes() {
    const { personajes, loading, eliminarPersonaje } = useFetchPersonajes();
    const navigate = useNavigate();

    const handleEditClick = (id) => {
        navigate(`/editarpersonaje/${id}`);
    };

    const handleAddClick = () => {
        navigate('/agregarpersonaje');
    };

    const handleDeleteClick = (id) => {
        eliminarPersonaje(id);
    };

    return (
        <>
            <Header />
            <main className='personajesMain'>
                <h1>Personajes</h1>
                <Button variant="success" onClick={handleAddClick} style={{ marginBottom: '20px' }}>
                    Agregar Personaje
                </Button>
                {loading && <Loading />}
                {personajes.map((personaje) => (
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