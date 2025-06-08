import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import useArmasRecomendadasDePersonaje from "../../../hooks/useArmasRecomendadasDePersonaje/useArmasRecomendadasDePersonaje";
import { ListGroup, Button } from "react-bootstrap";
import "./AdministrarArmasRecomendadas.css";


export default function AdministrarArmasRecomendadas() {

    const { id: idPersonaje } = useParams();

    const { armasRecomendadasAgregadas, armasRecomendadasNoAgregadas, agregarRecomendacionDeArma, eliminarRecomendacionDeArma } = useArmasRecomendadasDePersonaje(idPersonaje);
    const navigate = useNavigate();

    return (<>
        <Header />
        <h3>Armas Agregadas</h3>
        <ListGroup className="contenerdorArmasRecomendadas">
            {armasRecomendadasAgregadas.map((arma) => (
                <ListGroup key={`agregada-${arma.id}`} horizontal>
                    <ListGroup.Item className="itemImagenContainer">
                        <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                    </ListGroup.Item>
                    <ListGroup.Item className="itemDescripcion"><span className="armaDescripcion">{arma.descripcion}</span></ListGroup.Item>
                    <ListGroup.Item className="itemBotonEliminar">
                        <Button
                            variant="danger"
                            onClick={() => eliminarRecomendacionDeArma(idPersonaje, arma.id)}
                            className="botonEliminarArma"
                        >
                            Eliminar
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </ListGroup>

        <h3>Armas No Agregadas</h3>
        <ListGroup className="contenerdorArmasRecomendadas">
            {armasRecomendadasNoAgregadas.map((arma) => (
                <ListGroup key={`noagregada-${arma.id}`} horizontal>

                    <ListGroup.Item className="itemImagenContainer">
                        <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                    </ListGroup.Item>


                    <ListGroup.Item className="itemDescripcion"><span className="armaDescripcion">{arma.descripcion}</span></ListGroup.Item>
                    <ListGroup.Item className="itemBotonAgregar">
                        <Button
                            variant="success"
                            onClick={() => agregarRecomendacionDeArma(idPersonaje, arma.id)}
                            className="botonAgregarArma"
                        >
                            Agregar
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </ListGroup>

        <Button variant="primary" onClick={() => navigate(`/editarpersonaje/${idPersonaje}`)} className="mt-3">Volver</Button>

    </>
    );
}