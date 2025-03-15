import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ArmasModal({ adding, editing, handleClose, handleAddArma, handleEditArma, descripcion, ataqueBase, rareza, imagenURL, setDescripcion, setAtaqueBase, setRareza, setImagenURL, id }) {

    return <>
        <Modal show={adding} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregar arma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion" value={descripcion || ""} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formAtaqueBase">
                        <Form.Label>Ataque Base</Form.Label>
                        <Form.Control type="number" placeholder="Ataque Base" value={ataqueBase || 0} onChange={(e) => setAtaqueBase(Number(e.target.value))} />
                    </Form.Group>
                    <Form.Group controlId="formRareza">
                        <Form.Label>Rareza</Form.Label>
                        <Form.Control type="number" placeholder="Rareza" value={rareza || 0} onChange={(e) => setRareza(Number(e.target.value))} />
                    </Form.Group>
                    <Form.Group controlId="formImagenURL">
                        <Form.Label>Url de la imagen</Form.Label>
                        <Form.Control type="text" placeholder="URL" value={imagenURL || ""} onChange={(e) => setImagenURL(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleAddArma({ descripcion, ataqueBase, rareza, imagenURL })}>
                    Agregar Arma
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={editing} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Arma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion" value={descripcion || ""} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formAtaqueBase">
                        <Form.Label>Ataque Base</Form.Label>
                        <Form.Control type="number" placeholder="Ataque Base" value={ataqueBase || 0} onChange={(e) => setAtaqueBase(Number(e.target.value))} />
                    </Form.Group>
                    <Form.Group controlId="formRareza">
                        <Form.Label>Rareza</Form.Label>
                        <Form.Control type="number" placeholder="Rareza" value={rareza || 0} onChange={(e) => setRareza(Number(e.target.value))} />
                    </Form.Group>
                    <Form.Group controlId="formImagenURL">
                        <Form.Label>Url de la imagen</Form.Label>
                        <Form.Control type="text" placeholder="URL" value={imagenURL || ""} onChange={(e) => setImagenURL(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleEditArma({ id, descripcion, ataqueBase, rareza, imagenURL })}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}

export default ArmasModal;