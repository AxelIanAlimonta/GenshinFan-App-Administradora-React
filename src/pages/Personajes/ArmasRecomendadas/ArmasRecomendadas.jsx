import { ListGroup, Button, Modal } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import './ArmasRecomendadas.css'
import { useNavigate } from 'react-router-dom';
import { useArmasRecomendadas } from '../../../hooks/useArmasRecomendadas';
import useFetchArmas from '../../../hooks/useFetchArmas';

const ArmasRecomendadas = ({ personajeId }) => {


    const navigate = useNavigate();

    const { armas, loading: loadingArmas } = useFetchArmas();
    const { armasRecomendadas, loading } = useArmasRecomendadas();

    if (loading || loadingArmas) {
        return <Loading />;
    }

    const armasRecomendadasFiltradasPorId = armasRecomendadas.filter(arma => arma.personajeId == personajeId);
    const armasFiltradasPorRecomendadas = armas.filter(arma => armasRecomendadasFiltradasPorId.some(recomendada => recomendada.armaId == arma.id));
    

    return (
        <>
            <div>
                <h2>Armas recomendadas</h2>
                <Button variant="info" onClick={() => navigate(`/personajes/${personajeId}/administrarArmasRecomendadas`)} className='mb-3'>Administrar armas recomendadas</Button>
                <ListGroup className='contenerdorArmasRecomendadas'>
                    {armasFiltradasPorRecomendadas.map((arma) => (
                        <ListGroup horizontal key={arma.id} className="itemContainer">
                            <ListGroup.Item>
                                <img src={arma.imagenURL} alt={arma.nombre} className="itemImagen" />
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