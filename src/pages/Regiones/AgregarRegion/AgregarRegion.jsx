import { use } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AgregarRegion() {

    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    let navigate = useNavigate();

    function handleCancelar() {
        navigate("/regiones");
    }

    function handleAgregarRegion() {
        navigate("/regiones");
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formImagenURL">
                    <Form.Label>URL de la Imagen</Form.Label>
                    <Form.Control type="text" placeholder="URL" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="secondary" onClick={handleCancelar}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleAgregarRegion}>
                Agregar Región
            </Button>
        </>
    );
}
