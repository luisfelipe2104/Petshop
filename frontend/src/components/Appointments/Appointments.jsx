import React from 'react'
import './Appointments.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';

function Appointments() {
  return (
    <Container style={{ marginTop: '30px' }}>
        <Row>
            <Col md={4}>
                <div className="appointment-card">
                    <div className="header-card">
                        <p>Banho e Tosa</p>
                    </div>

                    <div className="patient-container">
                        <p>Paciente</p>
                        <p>Chimbinha</p>
                    </div>

                    <div className="date-container">
                        <p>Data</p>
                        <p>02/08/2023</p>
                    </div>

                    <div className="button-container">
                        <button>Cancelar</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Appointments