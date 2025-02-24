//componente react

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ElementosModal({ adding, editing, handleClose, handleAddElement, handleEditElement, descripcion, imagenURL, setDescripcion, setImagenURL, id }) {

    return <>
        <Modal show={adding} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregar elemento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formImagenURL">
                        <Form.Label>Url de la imagen</Form.Label>
                        <Form.Control type="text" placeholder="URL" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleAddElement({ descripcion, imagenURL })}>
                    Agregar Elemento
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={editing} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Elemento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formImagenURL">
                        <Form.Label>Url de la imagen</Form.Label>
                        <Form.Control type="text" placeholder="URL" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleEditElement({ id, descripcion, imagenURL })}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>

    </>;
}

export default ElementosModal;