import { Button, ListGroup } from "react-bootstrap";
import "./Elementos.css";
import Header from "../../components/Header/Header";
import useFetchElementos from "../../hooks/useFetchElementos";
import ElementosModal from "./ElementosModal";
import { useState } from "react";

function ElementosRemake() {

    const { elementos, addElemento, editElemento, removeElemento } = useFetchElementos();
    const [editingElement, setEditingElement] = useState(false);
    const [addingElement, setAddingElement] = useState(false);

    const [id, setId] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");


    function handleCloseModal() {
        setEditingElement(false);
        setAddingElement(false);
    }

    function handleAddElement({ descripcion, imagenURL }) {
        addElemento({ descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditElement({ id, descripcion, imagenURL }) {
        editElemento(id, { id, descripcion, imagenURL });
        handleCloseModal();
    }

    function handleEditingModal({ id, descripcion, imagenURL }) {
        setId(id);
        setDescripcion(descripcion);
        setImagenURL(imagenURL);
        setEditingElement(true);
    }

    function handleAddingModal() {
        setDescripcion("");
        setImagenURL("");
        setAddingElement(true);
    }

    function handleDeleteElement(id) {
        removeElemento(id);
    }

    return (
        <>
            <Header />
            <main>
                <Button variant="success" className="agregarBtn" onClick={handleAddingModal}>Agregar Elemento</Button>
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
                                <Button variant="primary" onClick={() => handleEditingModal({ id: elemento.id, descripcion: elemento.descripcion, imagenURL: elemento.imagenURL })}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteElement(elemento.id)}>Eliminar</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    ))}
                </ListGroup>
            </main>


            <ElementosModal editing={editingElement} adding={addingElement} handleClose={handleCloseModal} handleEditElement={handleEditElement} handleAddElement={handleAddElement} descripcion={descripcion} imagenURL={imagenURL} setDescripcion={setDescripcion} setImagenURL={setImagenURL} id={id} />
        </>
    );
}

export default ElementosRemake;