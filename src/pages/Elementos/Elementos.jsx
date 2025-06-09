import { Button, ListGroup } from "react-bootstrap";
import "./Elementos.css";
import Header from "../../components/Header/Header";
import useFetchElementos from "../../hooks/useFetchElementos";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Elementos() {

    const { elementos, removeElemento, loading } = useFetchElementos();

    const navigate = useNavigate();

    function handleEditElement(id) {
        navigate(`/elementos/editar/${id}`);
    }


    function handleAgregarElemento() {
        navigate("/elementos/agregar");
    }

    function handleDeleteElement(id) {
        removeElemento(id);
    }
    if (loading) return <>
        <Header />
        <main>
            <Loading />
        </main>
    </>

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAgregarElemento}>Agregar Elemento</Button>
                <ListGroup>
                    {elementos.map((elemento) => (
                        <ListGroup horizontal key={elemento.id} className="itemContainer">
                            <ListGroup.Item className="item">
                                {elemento.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <img src={elemento.imagenURL} alt={elemento.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditElement(elemento.id)}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteElement(elemento.id)}>Eliminar</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    ))}
                </ListGroup>
            </main>

        </>
    );
}

export default Elementos;