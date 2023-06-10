import React, { useState } from 'react'
import Paws from '../../components/assets/patas.svg'
import Logo from '../../components/assets/logo.svg'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(email, password);
    }

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
            <div className="navbar">
                <p>Inicio</p>
                <p>Login</p>
                <p>Cadastro</p>
            </div>
            <form action="" className="form">
                <h2>Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" />
                <button onClick={(e) => handleClick(e)}>Entrar</button>
            </form>
            <div />
        </div>
    </div>
  )
}

export default Login