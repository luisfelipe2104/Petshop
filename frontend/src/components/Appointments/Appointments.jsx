import React from "react";
import "./Appointments.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import dayjs from "dayjs";

function Appointments({ data }) {
  data.forEach((i) => {
    console.log(i);
  });
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        {data.map((item, index) => {
          return (
            <Col md={4} key={index}>
              <div className="appointment-card">
                <div className="header-card">
                  <p>{item.appointment_type}</p>
                </div>

                <div className="content-container">
                  <div className="patient-container">
                    <p className="title-label">Paciente</p>
                    <p>{item.pet_name}</p>
                  </div>

                  <div className="date-container">
                    <p className="title-label">Data</p>
                    <p>{dayjs(item.date).format('DD/MM/YYYY')}</p>
                  </div>

                  <div className="button-container">
                    <button>Cancelar</button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Appointments;
