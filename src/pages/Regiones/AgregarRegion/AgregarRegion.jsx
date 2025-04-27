import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PreviaDeImagen from "../../../components/PreviaDeImagen/PreviaDeImagen";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import "./AgregarRegion.css";
import { createRegion } from "../../../services/dataServices/regionApiService";

export default function AgregarRegion() {

    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    let navigate = useNavigate();

    function handleCancelar() {
        navigate("/regiones");
    }

    function handleAgregarRegion() {
        createRegion({ descripcion, imagenURL })
            .then(() => {
                navigate("/regiones");
            })
            .catch((error) => {
                console.error("Error al agregar la región:", error);
                alert("Error al agregar la región. Intente nuevamente.");
            });
    }

    return (
        <>
            <Header />
            <Form className="formularioAgregarRegion">
                <Form.Group controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formImagenURL">
                    <Form.Label>URL de la Imagen</Form.Label>
                    <Form.Control type="text" placeholder="URL" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
                    <PreviaDeImagen imagenURL={imagenURL} />
                </Form.Group>
                <div className="formularioAgregarRegion-botones">
                    <Button variant="success" onClick={handleAgregarRegion}>
                        Agregar Región
                    </Button>
                    <Button variant="danger" onClick={handleCancelar}>
                        Cancelar
                    </Button>

                </div>
            </Form>

        </>
    );
}
