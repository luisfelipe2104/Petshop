import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteAppointment({ show, handleClose, hideAll }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja cancelar essa consulta?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideAll}>
            Sim
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAppointment;
