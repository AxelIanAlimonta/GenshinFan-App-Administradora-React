import { Button, ListGroup } from "react-bootstrap";
import "./TiposDeArma.css";
import Header from "../../../components/Header/Header";
import useFetchTiposDeArma from "../../../hooks/useFetchTiposDeArma";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

function TiposDeArma() {
    const { tiposDeArma, removeTipoDeArma, loading } = useFetchTiposDeArma();

    const navigate = useNavigate();


    function handleAgregarTipoDeArma() {
        navigate("/armas/tiposdearma/agregar");
    }

    function handleEditarTipoDeArma(id) {
        navigate(`/armas/tiposdearma/editar/${id}`);
    }

    function handleDeleteTipoDeArma(id) {
        removeTipoDeArma(id);
    }

    if (loading) {
        return <>
            <Header />
            <Loading />
        </>
    }

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAgregarTipoDeArma}>Agregar Tipo de Arma</Button>
                <ListGroup>
                    {tiposDeArma.map((tipoDeArma) => (
                        <ListGroup horizontal key={tipoDeArma.id} className="itemContainer">
                            <ListGroup.Item className="item itemDescripcion">
                                {tipoDeArma.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <img src={tipoDeArma.imagenURL} alt={tipoDeArma.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditarTipoDeArma(tipoDeArma.id)}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteTipoDeArma(tipoDeArma.id)}>Eliminar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup>
            </main>


        </>
    );
}

export default TiposDeArma;