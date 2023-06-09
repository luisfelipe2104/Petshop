import React from 'react'
import Paws from '../../components/assets/patas.svg'
import Logo from '../../components/assets/logo.svg'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
        <div className="welcome-container">
            <div className="logo-container">
                <img className='logo' src={Logo} />
            </div>

            <div className="impact-phrase">
                <p>Seu <p className='yellow-word'> mundo animal</p> em <p className='yellow-word'>um lugar só</p></p>
            </div>

            <div className="paws-container">
                <img className='paws' src={Paws} />
            </div>
        </div>

        <div className="form-container">
            <form action="" className="form">
                <h2>Login</h2>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Entrar</button>
            </form>
        </div>
    </div>
  )
}

export default Login