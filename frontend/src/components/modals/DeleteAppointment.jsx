import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import api from '../../services/api'

function DeleteAppointment({ show, handleClose, hideAll, appointmentID }) {
  const handleDelete = async () => {
      try {
        const { data } = await api.delete(`/cancel-appointment/${appointmentID}`)
        .then(() => {
          hideAll()
        })
        console.log(data);
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja cancelar essa consulta?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {
            handleDelete()
          }}>
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
