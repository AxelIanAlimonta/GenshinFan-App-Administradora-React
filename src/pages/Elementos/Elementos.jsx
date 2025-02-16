import React, { useState } from 'react';
import './Elementos.css';
import Header from '../../components/Header/Header';
import useFetchElementos from '../../hooks/useFetchElementos.js';
import { Modal, Button, Form } from 'react-bootstrap';

const Elementos = () => {
    const { elementos, error, addElemento, editElemento, removeElemento } = useFetchElementos();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newElementoDescripcion, setNewElementoDescripcion] = useState('');
    const [editElementoDescripcion, setEditElementoDescripcion] = useState('');
    const [editElementoId, setEditElementoId] = useState(null);

    const handleEdit = (id, descripcion) => {
        setEditElementoId(id);
        setEditElementoDescripcion(descripcion);
        setShowEditModal(true);
    };

    const handleDelete = (id) => {
        removeElemento(id);
    };

    const handleAdd = () => {
        const newElemento = { descripcion: newElementoDescripcion }; // Actualiza con los datos reales
        addElemento(newElemento);
        setShowAddModal(false);
        setNewElementoDescripcion('');
    };

    const handleUpdate = () => {
        const updatedElemento = {
            descripcion: editElementoDescripcion
        }; // Actualiza con los datos reales
        editElemento(editElementoId, updatedElemento);
        setShowEditModal(false);
        setEditElementoDescripcion('');
        setEditElementoId(null);
    };

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleCloseEditModal = () => setShowEditModal(false);

    return (
        <>
            <Header />
            <div className="container">
                <h1>Elementos</h1>
                {error && <p>Error fetching elementos: {error.message}</p>}
                <Button className="mb-3" onClick={handleShowAddModal}>Agregar Elemento</Button>
                <ul className="list-group">
                    {elementos.map((elemento) => (
                        <li key={elemento.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {elemento.descripcion}
                            <div>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(elemento.id, elemento.descripcion)}>Editar</Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(elemento.id)}>Eliminar</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Elemento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formElementoDescripcion">
                            <Form.Label>Descripción del Elemento</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la descripción del elemento"
                                value={newElementoDescripcion}
                                onChange={(e) => setNewElementoDescripcion(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Agregar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Elemento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEditElementoDescripcion">
                            <Form.Label>Descripción del Elemento</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la nueva descripción del elemento"
                                value={editElementoDescripcion}
                                onChange={(e) => setEditElementoDescripcion(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Elementos;