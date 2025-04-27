import Header from "../../../components/Header/Header"
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getRegionById, updateRegion } from "../../../services/dataServices/regionApiService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PreviaDeImagen from "../../../components/PreviaDeImagen/PreviaDeImagen";
import "./EditarRegion.css";

export default function EditarRegion() {

    const { id } = useParams();
    const [descripcion, setDescripcion] = useState("asd");
    const [imagenURL, setImagenURL] = useState("asd");

    const navigate = useNavigate();

    useEffect(() => {
        getRegionById(id).then((region) => {
            setDescripcion(region.descripcion);
            setImagenURL(region.imagenURL);
        }).catch((error) => {
            console.error("Error fetching region data:", error);
        });
    }, [id]);



    function handleCancelar() {
        navigate("/regiones");
    }

    function handleGuardarCambios() {
        updateRegion(id, { id, descripcion, imagenURL }).then(() => {
            navigate("/regiones");
        }).catch((error) => {
            console.error("Error updating region:", error);
        });
    }


    return (<>
        <Header />
        <Form className="formularioEditarRegion">
            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formImagenURL">
                <Form.Label>URL de la Imagen</Form.Label>
                <Form.Control type="text" placeholder="URL" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
            </Form.Group>
            <PreviaDeImagen imagenURL={imagenURL} />
            <div className="formularioEditarRegion-botones">
                <Button variant="success" onClick={handleGuardarCambios}>
                    Guardar Cambios
                </Button>
                <Button variant="danger" onClick={handleCancelar}>
                    Cancelar
                </Button>
            </div>
        </Form>
    </>)
};