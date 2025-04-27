import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import './AgregarElemento.css';
import { createElemento } from "../../../services/dataServices/elementoApiService";

export default function AgregarElemento() {

    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const navigate = useNavigate();

    function handleCancelar() {
        setDescripcion("");
        setImagenURL("");
        navigate("/elementos");
    }

    function handleAgregarElemento() {
        createElemento({ descripcion, imagenURL });
        navigate("/elementos");
    }

    return (<>
        <Header />
        <h2>Agregar Elemento</h2>
        <Form className="formulario">
            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
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
                <Button variant="danger" onClick={handleCancelar} className="btn">
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleAgregarElemento} className="btn">
                    Agregar Elemento
                </Button>
            </Row>
        </Form>
    </>)
}