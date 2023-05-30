import React from 'react'
import "./Header.css"
import logo from '../assets/logo.svg'
import iconUser from '../assets/iconUser.svg'

export default function Header() {
  return (
    <header>
      <div className="container-logo">
        <img src={logo} />
      </div>

      <div className="nav-bar">
        <p>Início</p>
        <p>Serviços</p>
        <p>Login</p>
        <p>Cadastro</p>

        <div className="icon-user-container">
          <img className="icon-user" src={iconUser} />
        </div>

      </div>

    </header>
  )
}