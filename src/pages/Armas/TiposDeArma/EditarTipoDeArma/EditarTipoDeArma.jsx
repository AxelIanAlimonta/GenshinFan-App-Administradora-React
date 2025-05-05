import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import { Button, Form } from "react-bootstrap";
import PreviaDeImagen from "../../../../components/PreviaDeImagen/PreviaDeImagen";
import { useEffect, useState } from "react";
import "./EditarTipoDeArma.css";
import { getTipoDeArmaPorId, updateTipoDeArma } from "../../../../services/dataServices/tiposDeArmaService";



export default function EditarTipoDeArma() {

    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getTipoDeArmaPorId(id).then((tipoDeArma) => {
            setDescripcion(tipoDeArma.descripcion);
            setImagenURL(tipoDeArma.imagenURL);
        });
    }, []);

    function handleDescripcionChange(event) {
        setDescripcion(event.target.value);
    }
    function handleImagenURLChange(event) {
        setImagenURL(event.target.value);
    }

    function handleGuardarCambios(event) {
        event.preventDefault();
        updateTipoDeArma(id, { id, descripcion, imagenURL }).then(() => {
            navigate("/armas/tiposdearma")
        }).catch((error) => {
            console.error("Error al actualizar el tipo de arma:", error);
        });
    }

    function handleCancelar(event) {
        event.preventDefault();
        navigate("/armas/tiposdearma");
    }


    return (<>
        <Header />
        <h2>Editar Tipo de Arma</h2>
        <Form className="formularioDeArma">
            <Form.Group className="mb-3 " controlId="formDescripcion" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={handleDescripcionChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImagenURL">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control type="text" placeholder="Imagen URL" value={imagenURL} onChange={handleImagenURLChange} />
            </Form.Group>

            <PreviaDeImagen imagenURL={imagenURL} />


            <div className="botonesDelForm">
                <Button variant="success" type="submit" onClick={handleGuardarCambios}>
                    Guardar Cambios
                </Button>
                <Button variant="danger" type="button" onClick={handleCancelar}>Cancelar</Button>
            </div>
        </Form>


    </>);
}