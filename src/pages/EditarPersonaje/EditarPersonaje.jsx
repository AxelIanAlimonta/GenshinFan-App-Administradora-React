import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import useFetchPersonaje from '../../hooks/useFetchPersonaje';
import { updatePersonaje } from '../../services/dataServices/personajesApiService';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import './EditarPersonaje.css';

const EditarPersonaje = () => {
    const { id } = useParams();
    const { personaje, loading } = useFetchPersonaje(id);
    const [formData, setFormData] = useState({
        nombre: '',
        rareza: '',
        atkBase: '',
        defBase: '',
        vidaBase: '',
        imgTarjeta: '',
        imgDisenio: ''
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