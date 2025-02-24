import { Button, ListGroup } from "react-bootstrap";
import "./Regiones.css";
import Header from "../../components/Header/Header";
import useFetchRegiones from "../../hooks/useFetchRegiones";
import RegionesModal from "./RegionesModal";
import { useState } from "react";

function Regiones() {
    const { regiones, addRegion, editRegion, removeRegion } = useFetchRegiones();
    const [editingRegion, setEditingRegion] = useState(false);
    const [addingRegion, setAddingRegion] = useState(false);

    const [id, setId] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");

    function handleCloseModal() {
        setEditingRegion(false);
        setAddingRegion(false);
    }

    function handleAddRegion({ descripcion, imagenURL }) {
        addRegion({ descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditRegion({ id, descripcion, imagenURL }) {
        editRegion(id, { id, descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditingModal({ id, descripcion, imagenURL }) {
        setId(id);
        setDescripcion(descripcion);
        setImagenURL(imagenURL);
        setEditingRegion(true);
    }

    function handleAddingModal() {
        setDescripcion("");
        setImagenURL("");
        setAddingRegion(true);
    }

    function handleDeleteRegion(id) {
        removeRegion(id);
    }

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAddingModal}>Agregar Región</Button>
                <ListGroup>
                    {regiones.map((region) => (
                        <ListGroup horizontal key={region.id} className="itemContainer">
                            <ListGroup.Item className="item">
                                {region.descripcion}
                            </ListGroup.Item>
                            <ListGroup.Item className="item-img">
                                <img src={region.imagenURL} alt={region.descripcion} className="itemImagen" />
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="primary" onClick={() => handleEditingModal({ id: region.id, descripcion: region.descripcion, imagenURL: region.imagenURL })}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteRegion(region.id)}>Eliminar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup>
            </main>

            <RegionesModal editing={editingRegion} adding={addingRegion} handleClose={handleCloseModal} handleEditRegion={handleEditRegion} handleAddRegion={handleAddRegion} descripcion={descripcion} imagenURL={imagenURL} setDescripcion={setDescripcion} setImagenURL={setImagenURL} id={id} />
        </>
    );
}

export default Regiones;