import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TiposDeArmaModal({ adding, editing, handleClose, handleAddTipoDeArma, handleEditTipoDeArma, descripcion, imagenURL, setDescripcion, setImagenURL, id }) {
    return (
        <>
            <Modal show={adding} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Tipo de Arma</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => handleAddTipoDeArma({ descripcion, imagenURL })}>
                        Agregar Tipo de Arma
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editing} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Tipo de Arma</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => handleEditTipoDeArma({ id, descripcion, imagenURL })}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TiposDeArmaModal;