import { Button, ListGroup } from "react-bootstrap";
import "./Armas.css";
import Header from "../../components/Header/Header";
import useFetchArmas from "../../hooks/useFetchArmas";
import ArmasModal from "./ArmasModal";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

function Armas() {

    const { armas, addArma, editArma, removeArma, loading } = useFetchArmas();
    const [editingArma, setEditingArma] = useState(false);
    const [addingArma, setAddingArma] = useState(false);

    const [id, setId] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ataqueBase, setAtaqueBase] = useState(0);
    const [rareza, setRareza] = useState(0);
    const [imagenURL, setImagenURL] = useState("");


    function handleCloseModal() {
        setEditingArma(false);
        setAddingArma(false);
    }

    function handleAddArma({ descripcion, ataqueBase, rareza, imagenURL }) {
        addArma({ descripcion, ataqueBase, rareza, imagenURL });
        handleCloseModal();
    }

    function handleEditArma({ id, descripcion, ataqueBase, rareza, imagenURL }) {
        editArma(id, { id, descripcion, ataqueBase, rareza, imagenURL });
        handleCloseModal();
    }

    function handleEditingModal({ id, descripcion, ataqueBase, rareza, imagenURL }) {
        setId(id);
        setDescripcion(descripcion);
        setAtaqueBase(ataqueBase);
        setRareza(rareza);
        setImagenURL(imagenURL);
        setEditingArma(true);
    }

    function handleAddingModal() {
        setDescripcion("");
        setAtaqueBase(0);
        setRareza(0);
        setImagenURL("");
        setAddingArma(true);
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
                <Button variant="success" className="agregarBtn" onClick={handleAddingModal}>Agregar Arma</Button>
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
                                <Button variant="primary" onClick={() => handleEditingModal({ id: arma.id, descripcion: arma.descripcion, ataqueBase: arma.ataqueBase, rareza: arma.rareza, imagenURL: arma.imagenURL })}>Editar</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="item">
                                <Button variant="danger" onClick={() => handleDeleteArma(arma.id)}>Eliminar</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    ))}
                </ListGroup>
            </main>


            <ArmasModal editing={editingArma} adding={addingArma} handleClose={handleCloseModal} handleEditArma={handleEditArma} handleAddArma={handleAddArma} descripcion={descripcion} ataqueBase={ataqueBase} rareza={rareza} imagenURL={imagenURL} setDescripcion={setDescripcion} setAtaqueBase={setAtaqueBase} setRareza={setRareza} setImagenURL={setImagenURL} id={id} />
        </>
    );
}

export default Armas;