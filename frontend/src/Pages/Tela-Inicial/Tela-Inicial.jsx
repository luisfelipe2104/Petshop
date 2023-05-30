import React from 'react'
import Header from '../../components/Header/Header'
import './Tela-Inicial.css'

import Patas from '../../components/assets/patas.svg'
import Wave1 from '../../components/assets/wave1.svg'

export default function TelaInicial() {
  return (
    <div>
      <Header />

      <div className="section-1">
        <div className="container-text">

          <div className="title">
            <h1>Seu</h1>
            <h1 className="h1-destacado">mundo animal</h1>
            <h1>em</h1>
          </div>

          <div className="title">
            <h1 className="h1-destacado">um lugar só</h1>
          </div>

        </div>

        <div className="container-patas">
          <img className="patas" src={Patas} />
        </div>


      </div>
      <img className="wave" src={Wave1} />

      <div className="wave-container">
      </div>

    </div>
  )
}