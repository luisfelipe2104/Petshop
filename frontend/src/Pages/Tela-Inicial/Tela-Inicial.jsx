import React from 'react'
import Header from '../../components/Header/Header'
import './Tela-Inicial.css'

import Patas from '../../components/assets/patas.svg';

import banhoetosa from './img/banho&tosa.svg'
import vacinacao from './img/vacinação.svg'
import consulta from './img/consulta.svg'
import produtos from './img/produtos.svg'

export default function TelaInicial() {
  return (
    <div>
      <Header />

      <div className="section-1">

        <div className="container-slogan">

          <div className="slogan">
            <h1>Seu</h1>
            <h1 className="slogan-destacado">mundo animal</h1>
            <h1>em</h1>
          </div>

          <div className="slogan">
            <h1 className="slogan-destacado">um lugar só</h1>
          </div>

        </div>

        <div className="container-patas">
          <img className="patas" src={Patas} />
        </div>

      </div>

      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#863FE1" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,144C672,107,768,85,864,74.7C960,64,1056,64,1152,85.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>

      <div className="section-2">

        <div className="title-container">
          <h1 className='title'>Conheça nossos serviços</h1>
        </div>

        <div className="cards">

          <div className="card">
            <div className="title-card">Vacinação</div>
            <div className="card-background">
              <img src={vacinacao} />
              <button className='card-button'>Agendar</button>
            </div>
          </div>

          <div className="card">
            <div className="title-card">Vacinação</div>
            <div className="card-background">
              <img src={banhoetosa} />
              <button className='card-button'>Agendar</button>
            </div>
          </div>

          <div className="card">
            <div className="title-card">Vacinação</div>
            <div className="card-background">
              <img src={consulta} />
              <button className='card-button'>Agendar</button>
            </div>
          </div>

          <div className="card">
            <div className="title-card">Vacinação</div>
            <div className="card-background">
              <img src={produtos} />
              <button className='card-button'>Agendar</button>
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}