import { Button, Form } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import PreviaDeImagen from "../../../components/PreviaDeImagen/PreviaDeImagen";
import { useState } from "react";
import "./AgregarArma.css";
import { createArma } from "../../../services/dataServices/armaApiService";

export default function AgregarArma() {

    const navigate = useNavigate();
    const [descripcion, setDescripcion] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const [ataqueBase, setAtaqueBase] = useState(0);
    const [rareza, setRareza] = useState(0);


    function handleAgregarArma(e) {
        e.preventDefault(); 
        createArma({ descripcion, ataqueBase, rareza, imagenURL })
            .then(() => {
                console.log("Arma agregada exitosamente");
                navigate("/armas");
            })
            .catch((error) => {
                console.error("Error al agregar el arma:", error);
            });
    }



    return (<>
        <Header />
        <h2>Agregar Arma</h2>
        <Form className="formularioDeArma">
            <Form.Group className="mb-3 " controlId="formDescripcion" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Descripcion"
                    value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                />
            </Form.Group>



            <Form.Group className="mb-3" controlId="formAtaqueBase">
                <Form.Label>Ataque Base</Form.Label>
                <Form.Control type="number" placeholder="Ataque Base"
                    value={ataqueBase} onChange={(e) => setAtaqueBase(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRareza">
                <Form.Label>Rareza</Form.Label>
                <Form.Select value={rareza} onChange={(e) => setRareza(Number(e.target.value))}>
                    <option value="">Seleccione la rareza</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formImagenURL">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control type="text" placeholder="Imagen URL"
                    value={imagenURL} onChange={(e) => setImagenURL(e.target.value)}
                />
            </Form.Group>
            <PreviaDeImagen imagenURL={imagenURL} />




            <div className="botonesDelForm">
                <Button variant="success" type="submit" className="botonAgregarArma" onClick={handleAgregarArma}>
                    Agregar Arma
                </Button>
                <Button variant="danger" type="button" className="botonCancelarArma" onClick={() => navigate("/armas")}>
                    Cancelar
                </Button>
            </div>

        </Form>
    </>);
}