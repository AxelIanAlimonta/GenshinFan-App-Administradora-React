import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getElementoById, updateElemento } from "../../../services/dataServices/elementoApiService";
import Header from "../../../components/Header/Header";
import { Button, Form, Row } from "react-bootstrap";
import "./EditarElemento.css";

export default function EditarElemento() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [imagenURL, setImagenURL] = useState("");


    useEffect(() => {
        getElementoById(id).then((data) => {
            setNombre(data.nombre);
            setImagenURL(data.imagenURL);
        }).catch((error) => {
            console.error("Error fetching elemento:", error);
        });
    }, [id]);

    function handleCancelar() {
        setNombre("");
        setImagenURL("");
        navigate("/elementos");
    }

    function handleGuardarCambios() {
        updateElemento(id, { id, nombre, imagenURL }).then(() => {
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
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
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