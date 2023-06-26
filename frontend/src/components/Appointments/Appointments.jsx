import React, { useContext, useState } from "react";
import "./Appointments.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import AppointmentInfo from "../modals/AppointmentInfo";
import { DataContext } from "../../contexts/dataContext";

function Appointments({ data, getAppointments }) {
  const [show, setShow] = useState(false);
  const { appointmentData, setAppointmentData } = useContext(DataContext)

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setAppointmentData(item)
    setShow(true);
  }

  data.forEach((i) => {
    console.log(i);
  });

  if (!data) return <div><p>Loading...</p></div>

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
                    <button onClick={() => handleShow(item)}>Ver mais</button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <AppointmentInfo getAppointments={getAppointments} show={show} handleClose={handleClose} />
    </Container>
  );
}

export default Appointments;
