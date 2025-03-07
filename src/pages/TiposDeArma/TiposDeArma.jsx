import { Button, ListGroup } from "react-bootstrap";
import "./TiposDeArma.css";
import Header from "../../components/Header/Header";
import useFetchTiposDeArma from "../../hooks/useFetchTiposDeArma";
import TiposDeArmaModal from "./TiposDeArmaModal";
import { useState } from "react";

function TiposDeArma() {
    const { tiposDeArma, addTipoDeArma, editTipoDeArma, removeTipoDeArma, loading } = useFetchTiposDeArma();
    const [editingTipoDeArma, setEditingTipoDeArma] = useState(false);
    const [addingTipoDeArma, setAddingTipoDeArma] = useState(false);

    const [id, setId] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");

    function handleCloseModal() {
        setEditingTipoDeArma(false);
        setAddingTipoDeArma(false);
    }

    function handleAddTipoDeArma({ descripcion, imagenURL }) {
        addTipoDeArma({ descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditTipoDeArma({ id, descripcion, imagenURL }) {
        editTipoDeArma(id, { id, descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditingModal({ id, descripcion, imagenURL }) {
        setId(id);
        setDescripcion(descripcion);
        setImagenURL(imagenURL);
        setEditingTipoDeArma(true);
    }

    function handleAddingModal() {
        setDescripcion("");
        setImagenURL("");
        setAddingTipoDeArma(true);
    }

    function handleDeleteTipoDeArma(id) {
        removeTipoDeArma(id);
    }

    if (loading) {
        return <>
            <Header />
            <p>Cargando...</p>;
        </>
    }

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAddingModal}>Agregar Tipo de Arma</Button>
                <ListGroup>
                    {tiposDeArma.map((tipoDeArma) => (
                        <ListGroup horizontal key={tipoDeArma.id} className="itemContainer">
                            <ListGroup.Item className="item">
                                {tipoDeArma.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <img src={tipoDeArma.imagenURL} alt={tipoDeArma.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditingModal({ id: tipoDeArma.id, descripcion: tipoDeArma.descripcion, imagenURL: tipoDeArma.imagenURL })}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteTipoDeArma(tipoDeArma.id)}>Eliminar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup>
            </main>

            <TiposDeArmaModal editing={editingTipoDeArma} adding={addingTipoDeArma} handleClose={handleCloseModal} handleEditTipoDeArma={handleEditTipoDeArma} handleAddTipoDeArma={handleAddTipoDeArma} descripcion={descripcion} imagenURL={imagenURL} setDescripcion={setDescripcion} setImagenURL={setImagenURL} id={id} />
        </>
    );
}

export default TiposDeArma;