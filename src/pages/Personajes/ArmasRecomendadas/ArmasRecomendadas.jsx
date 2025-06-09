import { ListGroup, Button, Modal } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import './ArmasRecomendadas.css'
import { useNavigate } from 'react-router-dom';
import useArmasRecomendadasDePersonaje from '../../../hooks/useArmasRecomendadasDePersonaje/useArmasRecomendadasDePersonaje';

const ArmasRecomendadas = ({ personajeId }) => {
    const {
        armasRecomendadasAgregadas,
        loading,
    } = useArmasRecomendadasDePersonaje(personajeId);

    const navigate = useNavigate();

    if (loading) {
        return <Loading />;
    }



    return (
        <>
            <div>
                <h2>Armas recomendadas</h2>
                <Button variant="info" onClick={() => navigate(`/personajes/${personajeId}/administrarArmasRecomendadas`)} className='mb-3'>Administrar armas recomendadas</Button>
                <ListGroup className='contenerdorArmasRecomendadas'>
                    {armasRecomendadasAgregadas.map((arma) => (
                        <ListGroup horizontal key={arma.id} className="itemContainer">
                            <ListGroup.Item>
                                <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item armaDescripcion">
                                {arma.nombre}
                            </ListGroup.Item>
                            
                        </ListGroup>
                    ))}
                </ListGroup>
            </div>
        </>
    );
};

export default ArmasRecomendadas;