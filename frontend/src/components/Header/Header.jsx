import React, { useContext } from 'react'
import "./Header.css"
import logo from '../assets/logo.svg'
import iconUser from '../assets/iconUser.svg'
import { Link } from 'react-router-dom'
import { DataContext } from '../../contexts/dataContext'

export default function Header() {
  const { isLoggedIn, userData } = useContext(DataContext)

  return (
    <header>
      <div className="container-logo">
        <img src={logo} />
      </div>

      <div className="nav-bar">
        <p>Início</p>
        <p>Serviços</p>
        {isLoggedIn ? <p>{userData[0].name}</p> : (
          <div>
            <Link className='link' to="/login">
              <p>Login</p>
            </Link>

            <Link className='link' to='/register'>
              <p>Cadastro</p>
            </Link>
          </div>
        )}

        <div className="icon-user-container">
          <Link to="/dados" >
            <img className="icon-user" src={iconUser} />
          </Link>
        </div>

      </div>

    </header>
  )
}