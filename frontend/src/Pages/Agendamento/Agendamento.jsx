import React, { useContext, useState } from 'react'
import './Agendamento.css'

import Header from '../../components/Header/Header'

import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IMaskInput } from 'react-imask';

import './Calendar.css';

import { DataContext } from '../../contexts/dataContext';

import { Navigate } from 'react-router-dom';

import dayjs from 'dayjs'

export default function Agendamento() {
  const [value, onChange] = useState();
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [animalBirthday, setAnimalBirthday] = useState('')
  const [appointmentHour, setAppointmentHour] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [checked, setChecked] = useState(null)
  const { isLoggedIn, userData } = useContext(DataContext)


  const handleSubmit = () => {
    const id = userData[0].id
    const appointmentType = checked == 1 && 'Vacinação' || checked == 2 && 'Banho e Tosa' || checked == 3 && 'Consulta' 
    console.log(name, animal, animalBirthday, id, appointmentType, appointmentDate, appointmentHour);
  }

  return (
    <div style={{backgroundColor: '#F5F5F5'}} >

      {isLoggedIn ? (
  
      <div>
        <Header />
  
        <div className="container-agendamento">
  
          <div className="title-container">
            <h1 className="title">Agendar</h1>
          </div>
  
          <div className="line" />
  
          <h2 className='no-scroll checkbox-container2'>Selecione o serviço desejado</h2>
  
          <Row>
            
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <div className="checkbox">
                    <input type="checkbox" checked={checked == 1} onChange={() => setChecked(1)} />
                    <h3 className='no-scroll'>Vacinação</h3>
                  </div>
                </Col>
      
                <Col md={4}>
                  <div className="checkbox">
                    <input type="checkbox" checked={checked == 2} onChange={() => setChecked(2)} />
                    <h3 className='no-scroll'>Banho & Tosa</h3>
                  </div>
                </Col>
      
                <Col md={4}>
                  <div className="checkbox">
                    <input type="checkbox" checked={checked == 3} onChange={() => setChecked(3)} />
                    <h3 className='no-scroll'>Consulta</h3>
                  </div>
                </Col>
              </Row>
            </Col>
  
          </Row>
  
          <div className="dividir">
            <Row className='row2'>

            <Col md={5} className='col3'>
    
                <div className="inform-your-data">
    
                  {/* <h2>Informe seus dados</h2>
    
                  <div className="form">
                    <p>Nome completo</p>
                    <input className='input2' type="text" name="" id="" />
    
                    <p>CPF</p>
                    <IMaskInput className='input2' placeholder='cpf' type="text" mask="000.000.000-00" name="" id="" />
                  </div> */}
    
                </div>
    
                <div className="inform-your-pet-data">
    
                  <h2 className='no-scroll'>Informe os dados de seu pet</h2>
    
                  <div className="form">
                    <div>
                      <label>Nome do pet</label>
                      <input onChange={(e) => setName(e.target.value)} className='input2' type="text" name="" id="" />
                    </div>
    
                  <div>
                    <label>Tipo de Animal</label>
                    <select onChange={(e) => setAnimal(e.target.value)} className='input2'>
                      <option value="">SELECT</option>
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Papagaio">Papagaio</option>
                      <option value="Coelho">Coelho</option>
                    </select>
                  </div>

                    <div>
                      <label>Data de nascimento</label>
                      <IMaskInput onChange={(e) => setAnimalBirthday(e.target.value)} className='input2' mask="00/00/0000" type="text" name="" id="" />
                    </div>

                    <div className="container-hour">
                      <label for="appt">Selecione o horário da consulta:</label>
                      <input onChange={(e) => setAppointmentHour(e.target.value)} type="time" id="appt" name="appt"></input>
                    </div>
                  </div>
    
                </div>
    
            </Col>
  
            <Col md={4} className='col2'>
                <Calendar 
                  onChange={(value) => {
                    setAppointmentDate(dayjs(value).format('YYYY-MM-DD'))
                    onChange(value)
                  }} 
                  value={value} 
                  minDate={new Date()}
                />

                <div className="button-container">
                  <button onClick={() => handleSubmit()} className='conclude-button'>Finalizar</button>
                  <button className='cancel-button'>Cancelar</button>
                </div>
            </Col>
  
            </Row>
          </div>
  
        </div>
  
      </div>
      ) : <Navigate to='/login' />}
    </div>
  )
}