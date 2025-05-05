import Header from "../../../../components/Header/Header";
import { Button, Form } from "react-bootstrap";
import PreviaDeImagen from "../../../../components/PreviaDeImagen/PreviaDeImagen";
import { useState } from "react";
import "./AgregarTipoDeArma.css";
import { useNavigate } from "react-router-dom";
import { createTipoDeArma } from "../../../../services/dataServices/tiposDeArmaService";

export default function AgregarTipoDeArma() {

    const [imagenURL, setImagenURL] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();


    function handleChangeDescripcion(event) {
        setDescripcion(event.target.value);
    }

    function handleChangeImagenURL(event) {
        setImagenURL(event.target.value);
    }

    function handleCancelar() {
        navigate("/armas/tiposdearma");
    }

    function handleAgregar(event) {
        event.preventDefault();

        createTipoDeArma({ descripcion, imagenURL })
            .then(() => {
                navigate("/armas/tiposdearma");
            }).catch((error) => {
                console.error("Error al agregar el tipo de arma:", error);
            });
    }

    return (
        <>
            <Header />
            <h2>Agregar Tipo de Arma</h2>
            <Form className="agregarTipoDeArmaForm">
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Tipo de Arma" value={descripcion} onChange={handleChangeDescripcion} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImagenURL">
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control type="text" placeholder="URL de la Imagen" value={imagenURL} onChange={handleChangeImagenURL} />
                </Form.Group>

                <PreviaDeImagen imagenURL={imagenURL} />

                <div className="botonesDelForm">
                    <Button variant="success" type="submit" onClick={handleAgregar}>
                        Agregar
                    </Button>
                    <Button variant="danger" type="button" onClick={handleCancelar}>
                        Cancelar
                    </Button>
                </div>
            </Form>

        </>
    );
}