import React, { useContext, useState } from 'react'
import './Agendamento.css'

import Header from '../../components/Header/Header'

import Calendar from 'react-calendar';

import { IMaskInput } from 'react-imask';

import 'react-calendar/dist/Calendar.css';

import { DataContext } from '../../contexts/dataContext';

import { Navigate } from 'react-router-dom';

export default function Agendamento() {
  const [value, onChange] = useState();
  const { isLoggedIn } = useContext(DataContext)

  console.log(value);

  return (
    <div>

      {isLoggedIn ? (
  
      <div>
        <Header />
  
        <div className="container-agendamento">
  
          <div className="title-container">
            <h1 className="title">Agendar</h1>
          </div>
  
          <div className="line" />
  
          <h2>Selecione o serviço desejado</h2>
  
          <div className="checkbox-container">
  
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <h3>Vacinação</h3>
            </div>
  
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <h3>Banho & Tosa</h3>
            </div>
  
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <h3>Consulta</h3>
            </div>
  
          </div>
  
          <div className="dividir">
  
            <div className="select-service">
  
              <div className="inform-your-data">
  
                <h2>Informe seus dados</h2>
  
                <div className="form">
                  <p>Nome completo</p>
                  <input type="text" name="" id="" />
  
                  <p>CPF</p>
                  <IMaskInput placeholder='cpf' type="text" mask="000.000.000-00" name="" id="" />
                </div>
  
              </div>
  
              <div className="inform-your-pet-data">
  
                <h2>Informe seus dados</h2>
  
                <div className="form">
                  <p>Nome do pet</p>
                  <input type="text" name="" id="" />
  
                  <p>Tipo de animal</p>
                  <input type="text" name="" id="" />
  
                  <p>Data de nascimento</p>
                  <IMaskInput mask="00/00/0000" type="text" name="" id="" />
                </div>
  
              </div>
  
            </div>
  
            <div className="calendar-container">
              <Calendar onChange={(value) => onChange(value)} value={value} />
  
              <button>Finalizar</button>
              <button>Cancelar</button>
            </div>
  
          </div>
  
        </div>
  
      </div>
      ) : <Navigate to='/login' />}
    </div>
  )
}