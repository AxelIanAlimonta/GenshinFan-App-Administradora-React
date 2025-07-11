import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./EditarArma.css";
import { Button, Form } from "react-bootstrap";
import PreviaDeImagen from "../../../components/PreviaDeImagen/PreviaDeImagen";
import { useEffect, useState } from "react";
import { updateArma, getArmaById } from "../../../services/dataServices/armaApiService";
import useFetchTiposDeArma from "../../../hooks/useFetchTiposDeArma";
import Loading from "../../../components/Loading/Loading";

export default function EditarArma() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [ataqueBase, setAtaqueBase] = useState(0);
    const [rareza, setRareza] = useState(0);
    const [imagenURL, setImagenURL] = useState("");
    const [tipoDeArmaId, setTipoDeArmaId] = useState(0);

    const { tiposDeArma, loading } = useFetchTiposDeArma();


    useEffect(() => {
        getArmaById(id)
            .then((arma) => {
                setNombre(arma.nombre);
                setAtaqueBase(arma.ataqueBase);
                setRareza(arma.rareza);
                setImagenURL(arma.imagenURL);
                setTipoDeArmaId(arma.tipoDeArmaId);
            })
            .catch((error) => {
                console.error("Error al obtener el arma:", error);
            });
    }, []);

    function handleGuardarCambios(e) {
        e.preventDefault();
        updateArma(id, { id, nombre, ataqueBase, rareza, imagenURL, tipoDeArmaId })
            .then(() => {
                navigate("/armas");
            })
            .catch((error) => {
                console.error("Error al editar el arma:", error);
            });
    }

    if (loading) {
        return <>
            <Header />
            <Loading />
        </>
    }

    return (<>
        <Header />
        <h2>Editar Arma</h2>
        <Form className="formularioDeArma">
            <Form.Group className="mb-3 " controlId="formNombre" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre"
                    value={nombre} onChange={(e) => setNombre(e.target.value)}
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

            <Form.Group className="mb-3" controlId="formtipoDeArmaId">
                <Form.Label>Tipo de Arma</Form.Label>
                <Form.Select value={tipoDeArmaId} onChange={(e) => setTipoDeArmaId(Number(e.target.value))}>
                    <option value="">Seleccione el tipo de arma</option>
                    {tiposDeArma.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>{tipo.descripcion}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImagenURL">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control type="text" placeholder="URL de la imagen"
                    value={imagenURL} onChange={(e) => setImagenURL(e.target.value)}
                />
            </Form.Group>
            <PreviaDeImagen imagenURL={imagenURL} setImagenURL={setImagenURL} />

            <div className="botonesDelForm">
                <Button variant="success" type="submit" onClick={handleGuardarCambios}>
                    Guardar cambios
                </Button>
                <Button variant="danger" type="button" onClick={() => navigate("/armas")}>
                    Cancelar
                </Button>
            </div>

        </Form>

    </>
    );
}