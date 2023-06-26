import React, {useContext, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from "../../contexts/dataContext";
import DeleteAppointment from "./DeleteAppointment";
import { useNavigate } from "react-router-dom";

function AppointmentInfo({ show, handleClose, getAppointments }) {
    const { appointmentData, userData } = useContext(DataContext)

    const [showDelete, setShowDelete] = useState(false)
    const closeDelete = () => setShowDelete(false)

    const hideAll = () => {
        getAppointments()
        closeDelete()
        handleClose()
    }

    const navigate = useNavigate()
    
    if (!appointmentData) return <div><p></p></div>
    
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{appointmentData.appointment_type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <div>
                    <h1>Informações do dono</h1>
                </div>

                <div>
                    <p><strong>Dono:</strong> {userData[0].name}</p>
                </div>

                <div>
                    <p><strong>CPF do dono:</strong> {userData[0].cpf}</p>
                </div>

                <div>
                    <h1>Informações do pet</h1>
                </div>

                <div>
                    <p><strong>Animal:</strong> {appointmentData.animal}</p>
                </div>
                
                <div>
                    <p><strong>Nome:</strong> {appointmentData.pet_name}</p>
                </div>

                <div>
                    <p><strong>Data de nascimento:</strong> {appointmentData.animal_birthday}</p>
                </div>

                <div>
                    <p><strong>Data da consulta:</strong> {appointmentData.date}</p>
                </div>

                <div>
                    <p><strong>Horário da consulta:</strong> {appointmentData.appointment_hour}</p>
                </div>
            </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowDelete(true)}>
            Cancelar consulta
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            navigate('/update-appointment')
          }}>
            Atualizar consulta
          </Button>
        </Modal.Footer>
      </Modal>

      <DeleteAppointment appointmentID={appointmentData.id} hideAll={hideAll} show={showDelete} handleClose={closeDelete} />
    </>
  );
}

export default AppointmentInfo;
