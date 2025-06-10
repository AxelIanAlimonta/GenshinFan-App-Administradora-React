import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import './AgregarElemento.css';
import { createElemento } from "../../../services/dataServices/elementoApiService";

export default function AgregarElemento() {

    const [nombre, setNombre] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const navigate = useNavigate();

    function handleCancelar() {
        setNombre("");
        setImagenURL("");
        navigate("/elementos");
    }

    function handleAgregarElemento() {
        createElemento({ nombre, imagenURL });
        navigate("/elementos");
    }

    return (<>
        <Header />
        <h2>Agregar Elemento</h2>
        <Form className="formulario">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
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
                <Button variant="success" onClick={handleAgregarElemento} className="btn">
                    Agregar Elemento
                </Button>
                <Button variant="danger" onClick={handleCancelar} className="btn">
                    Cancelar
                </Button>
            </Row>
        </Form>
    </>)
}