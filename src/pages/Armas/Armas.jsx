import { Button, ListGroup } from "react-bootstrap";
import "./Armas.css";
import Header from "../../components/Header/Header";
import useFetchArmas from "../../hooks/useFetchArmas";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

function Armas() {
    const navigate = useNavigate();
    const { armas, removeArma, loading } = useFetchArmas();

    function handleAgregarArma() {
        navigate("/armas/agregararma");
    }

    function handleEditarArma(id) {
        navigate(`/armas/editararma/${id}`);
    }

    function handleDeleteArma(id) {
        removeArma(id);
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
                <Button variant="success" className="agregarBtn" onClick={handleAgregarArma}>Agregar Arma</Button>
                <ListGroup>
                    {armas.map((arma) => (
                        <ListGroup horizontal key={arma.id} className="itemContainer">
                            <ListGroup.Item className="item armaDescripcion">
                                {arma.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                Ataque Base: {arma.ataqueBase}
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                Rareza: {arma.rareza}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <img src={arma.imagenURL} alt={arma.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditarArma(arma.id)}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteArma(arma.id)}>Eliminar</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    ))}
                </ListGroup>
            </main>


        </>
    );
}

export default Armas;