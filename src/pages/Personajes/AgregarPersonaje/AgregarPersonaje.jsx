import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { createPersonaje } from '../../../services/dataServices/personajesApiService';
import Header from '../../../components/Header/Header';
import PreviaDeImagen from '../../../components/PreviaDeImagen/PreviaDeImagen';
import useFetchElementos from '../../../hooks/useFetchElementos';
import useFetchRegiones from '../../../hooks/useFetchRegiones';
import useFetchTiposDeArma from '../../../hooks/useFetchTiposDeArma';
import './AgregarPersonaje.css';

function AgregarPersonaje() {
    const [personaje, setPersonaje] = useState({
        nombre: '',
        rareza: 5,
        atkBase: 0,
        defBase: 0,
        vidaBase: 0,
        imgTarjeta: '',
        imgDisenio: '',
        id_Elemento: '',
        id_Region: '',
        id_TipoDeArma: ''
    });

    const { elementos } = useFetchElementos();
    const { regiones } = useFetchRegiones();
    const { tiposDeArma } = useFetchTiposDeArma();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonaje({
            ...personaje,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPersonaje(personaje).then(() => {
            navigate('/personajes');
        }).catch((error) => {
            console.error('Error creating personaje:', error);
        });
    };

    const handleCancel = () => {
        navigate('/personajes');
    };

    return (
        <>
            <Header />
            <Container>
                <h1 className="my-4">Agregar Personaje</h1>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={personaje.nombre}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formRareza">
                                <Form.Label>Rareza</Form.Label>
                                <Form.Select
                                    name="rareza"
                                    value={personaje.rareza}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar rareza</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formElemento">
                                <Form.Label>Elemento</Form.Label>
                                <Form.Select
                                    name="id_Elemento"
                                    value={personaje.id_Elemento}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar elemento</option>
                                    {elementos.map((elemento) => (
                                        <option key={elemento.id} value={elemento.id}>
                                            {elemento.descripcion}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formRegion">
                                <Form.Label>Región</Form.Label>
                                <Form.Select
                                    name="id_Region"
                                    value={personaje.id_Region}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar región</option>
                                    {regiones.map((region) => (
                                        <option key={region.id} value={region.id}>
                                            {region.descripcion}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formTipoDeArma">
                                <Form.Label>Tipo de Arma</Form.Label>
                                <Form.Select
                                    name="id_TipoDeArma"
                                    value={personaje.id_TipoDeArma}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar tipo de arma</option>
                                    {tiposDeArma.map((tipoDeArma) => (
                                        <option key={tipoDeArma.id} value={tipoDeArma.id}>
                                            {tipoDeArma.descripcion}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formAtkBase">
                                <Form.Label>ATK Base</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="atkBase"
                                    value={personaje.atkBase}
                                    onChange={handleChange}
                                    className="no-arrows"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formDefBase">
                                <Form.Label>DEF Base</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="defBase"
                                    value={personaje.defBase}
                                    onChange={handleChange}
                                    className="no-arrows"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formVidaBase">
                                <Form.Label>Vida Base</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="vidaBase"
                                    value={personaje.vidaBase}
                                    onChange={handleChange}
                                    className="no-arrows"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formImgTarjeta">
                                <Form.Label>Imagen Tarjeta</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imgTarjeta"
                                    value={personaje.imgTarjeta}
                                    onChange={handleChange}
                                />
                                <PreviaDeImagen imagenURL={personaje.imgTarjeta} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formImgDisenio">
                                <Form.Label>Imagen Diseño</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imgDisenio"
                                    value={personaje.imgDisenio}
                                    onChange={handleChange}
                                />
                                <PreviaDeImagen imagenURL={personaje.imgDisenio} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="success" type="submit" className="mt-3">
                        Agregar Personaje
                    </Button>
                    <Button variant="danger" onClick={handleCancel} className="mt-3 ms-2">
                        Cancelar
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default AgregarPersonaje;