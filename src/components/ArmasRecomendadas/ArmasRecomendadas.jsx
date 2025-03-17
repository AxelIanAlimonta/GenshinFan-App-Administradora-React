import { useState } from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import useFetchArmasRecomendadasDePersonaje from '../../hooks/useFetchArmasRecomendadasDePersonaje';
import Loading from '../Loading/Loading';
import './ArmasRecomendadas.css'

const ArmasRecomendadas = ({ personajeId }) => {
    const { armasFiltradas, eliminarRecomendacionDeArma, agregarRecomendacionDeArma, loading, armas } = useFetchArmasRecomendadasDePersonaje(personajeId);
    const [showModal, setShowModal] = useState(false);

    if (loading) {
        return <Loading />;
    }

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const armasDisponibles = armas.filter(arma => !armasFiltradas.some(armaFiltrada => armaFiltrada.id === arma.id));

    return (
        <div>
            <h2>Armas recomendadas</h2>
            <Button variant="info" onClick={handleShowModal} className='mb-3'>Agregar armas recomendadas</Button>
            <ListGroup className='contenerdorArmasRecomendadas'>
                {armasFiltradas.map((arma) => (
                    <ListGroup horizontal key={arma.id} className="itemContainer">
                        <ListGroup.Item>
                            <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                        </ListGroup.Item>
                        <ListGroup.Item className="item armaDescripcion">
                            {arma.descripcion}
                        </ListGroup.Item>


                        <ListGroup.Item className="item">
                            <Button variant="danger" onClick={() => eliminarRecomendacionDeArma(arma.id)}>Eliminar</Button>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </ListGroup>

            <Modal show={showModal} onHide={handleCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Armas</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalAgregarArmasRecomendadas'>
                    <ListGroup>
                        {armasDisponibles.map((arma) => (
                            <ListGroup horizontal key={arma.id} className="itemContainer">
                                <ListGroup.Item>
                                    <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                                </ListGroup.Item>
                                <ListGroup.Item className="item armaDescripcion">
                                    {arma.descripcion}
                                </ListGroup.Item>

                                <ListGroup.Item className="item">
                                    <Button variant="primary" onClick={() => { agregarRecomendacionDeArma(arma.id); handleCloseModal(); }}>Agregar</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ArmasRecomendadas;