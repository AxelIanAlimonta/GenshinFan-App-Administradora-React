import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getElementoById, updateElemento } from "../../../services/dataServices/elementoApiService";
import Header from "../../../components/Header/Header";
import { Button, Form, Row } from "react-bootstrap";
import "./EditarElemento.css";

export default function EditarElemento() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");


    useEffect(() => {
        getElementoById(id).then((data) => {
            setDescripcion(data.descripcion);
            setImagenURL(data.imagenURL);
        }).catch((error) => {
            console.error("Error fetching elemento:", error);
        });
    }, [id]);

    function handleCancelar() {
        setDescripcion("");
        setImagenURL("");
        navigate("/elementos");
    }

    function handleGuardarCambios() {
        updateElemento(id, { id, descripcion, imagenURL }).then(() => {
            navigate("/elementos");
        }).catch((error) => {
            console.error("Error updating elemento:", error);
        });
    }

    return (
        <>
            <Header />
            <h2>Editar Elemento</h2>
            <Form className="formulario">
                <Form.Group controlId="formDescripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formImagenURL">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="URL"
                        value={imagenURL}
                        onChange={(e) => setImagenURL(e.target.value)}
                    />
                </Form.Group>

                {imagenURL && (
                    <img src={imagenURL} alt="Vista previa" className="imagen-previa" />
                )}
                <Row className="botones">
                    <Button variant="success" onClick={handleGuardarCambios} className="btn">
                        Guardar Cambios
                    </Button>
                    <Button variant="danger" onClick={handleCancelar} className="btn">
                        Cancelar
                    </Button>
                </Row>
            </Form>
        </>
    );
}