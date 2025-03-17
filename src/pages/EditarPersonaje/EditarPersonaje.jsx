import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import useFetchPersonaje from '../../hooks/useFetchPersonaje';
import { updatePersonaje } from '../../services/dataServices/personajesApiService';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import ArmasRecomendadas from '../../components/ArmasRecomendadas/ArmasRecomendadas';
import useFetchElementos from '../../hooks/useFetchElementos'; // Import the hook
import useFetchRegiones from '../../hooks/useFetchRegiones'; // Import the hook
import useFetchTiposDeArma from '../../hooks/useFetchTiposDeArma'; // Import the hook
import './EditarPersonaje.css';

const EditarPersonaje = () => {
    const { id } = useParams();
    const { personaje, loading } = useFetchPersonaje(id);
    const { elementos } = useFetchElementos(); // Fetch elementos
    const { regiones } = useFetchRegiones(); // Fetch regiones
    const { tiposDeArma } = useFetchTiposDeArma(); // Fetch tipos de arma
    const [formData, setFormData] = useState({
        nombre: '',
        rareza: '',
        atkBase: '',
        defBase: '',
        vidaBase: '',
        imgTarjeta: '',
        imgDisenio: '',
        id_Elemento: '', // Add id_Elemento to the state
        id_Region: '', // Add id_Region to the state
        id_TipoDeArma: '' // Add id_TipoDeArma to the state
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (personaje) {
            setFormData(personaje);
        }
    }, [personaje]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePersonaje(id, formData).then(() => {
            navigate('/personajes');
        });
    };

    const handleCancel = () => {
        navigate('/personajes');
    };

    return (
        <>
            <Header />
            <Container>
                <h1 className="my-4">Editar Personaje</h1>
                {loading ? (
                    <Loading />
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formNombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formRareza">
                                    <Form.Label>Rareza</Form.Label>
                                    <Form.Select
                                        name="rareza"
                                        value={formData.rareza}
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
                                        value={formData.id_Elemento}
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
                                        value={formData.id_Region}
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
                                        value={formData.id_TipoDeArma}
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
                                        value={formData.atkBase}
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
                                        value={formData.defBase}
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
                                        value={formData.vidaBase}
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
                                        value={formData.imgTarjeta}
                                        onChange={handleChange}
                                    />
                                    {formData.imgTarjeta && (
                                        <img
                                            src={formData.imgTarjeta}
                                            alt="Vista previa de la imagen de la tarjeta"
                                            className="img-preview"
                                        />
                                    )}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formImgDisenio">
                                    <Form.Label>Imagen Diseño</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="imgDisenio"
                                        value={formData.imgDisenio}
                                        onChange={handleChange}
                                    />
                                    {formData.imgDisenio && (
                                        <img
                                            src={formData.imgDisenio}
                                            alt="Vista previa de la imagen de diseño"
                                            className="img-preview"
                                        />
                                    )}
                                </Form.Group>
                            </Col>
                        </Row>

                        <ArmasRecomendadas personajeId={id} />

                        <Button variant="success" type="submit" className="mt-3">
                            Guardar Cambios
                        </Button>
                        <Button variant="danger" onClick={handleCancel} className="mt-3 ms-2">
                            Cancelar
                        </Button>
                    </Form>
                )}
            </Container>
        </>
    );
};

export default EditarPersonaje;