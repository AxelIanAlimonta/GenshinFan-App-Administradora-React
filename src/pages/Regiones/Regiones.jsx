import { Button, ListGroup } from "react-bootstrap";
import "./Regiones.css";
import Header from "../../components/Header/Header";
import useFetchRegiones from "../../hooks/useFetchRegiones";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Regiones() {
    const { regiones, removeRegion, loading } = useFetchRegiones();
    const navigate = useNavigate();

    function handleAgregarRegion() {
        navigate("/regiones/agregar");
    }

    function handleEditarRegion(id) {
        navigate(`/regiones/editar/${id}`);
    }

    function handleDeleteRegion(id) {
        removeRegion(id);
    }

    if (loading) {
        return <>
            <Header />
            <main>
                <Loading />
            </main>
        </>
    }

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAgregarRegion}>Agregar Región</Button>
                <ListGroup>
                    {regiones.map((region) => (
                        <ListGroup horizontal key={region.id} className="itemContainer">
                            <ListGroup.Item className="item itemDescripcion">
                                {region.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item className="item-img">
                                <img src={region.imagenURL} alt={region.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditarRegion(region.id)}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteRegion(region.id)}>Eliminar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup>
            </main>


        </>
    );
}

export default Regiones;